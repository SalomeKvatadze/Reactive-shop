import 'react-native-gesture-handler'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { Platform, SafeAreaView, StatusBar } from 'react-native'
import Home from '../react-shop-main/screens/Home'
import Profile from '../react-shop-main/screens/Profile'
import Settings from '../react-shop-main/screens/Settings'
import Cart from '../react-shop-main/screens/Cart'
import Checkout from '../react-shop-main/screens/Checkout'
import MyOrdersScreen from '../react-shop-main/screens/MyOrdersScreen'
import OrderDetailsScreen from '../react-shop-main/screens/OrderDetailsScreen'
import Success from '../react-shop-main/screens/Success'




import axios from 'axios';
import * as Notifications from 'expo-notifications'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import IonicIcons from 'react-native-vector-icons/Ionicons'
import { Provider, useSelector } from 'react-redux'
import CustomDrawer from './components/CustomDrawer'
import ProductDetails from './components/ProductDetails'
import { store } from './store'
import { useEffect } from 'react'
import Constants from 'expo-constants';
 
import Nav from './Nav'


axios.defaults.baseURL='https://dummyjson.com/'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

Notifications.scheduleNotificationAsync({
  content: {
    title: 'Look at that notification',
    body: "Good Job Girlie ",
  },
  trigger: null, 
});

const App=()=>{
 
  useEffect(()=>{
    registerForPushNotificationsAsync().then(token => {
      console.log(token);
    })
  })
  const Drawer = createDrawerNavigator();
  return (

    <Provider store={store}>
    <SafeAreaView style={{flex:1, narginTop:Platform.OS=='android'?StatusBar.currentHeight:0}}> 
  
      <Nav/>

      </SafeAreaView> 
    </Provider>
  )
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return;
  }

  

  try {
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
    if (!projectId) {
      throw new Error('Project ID not found');
    }
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId,
      })
    ).data;
    console.log(token);
  } catch (e) {
    token = `${e}`;
  }

  return token;
}

export default App
