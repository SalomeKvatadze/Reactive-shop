import 'react-native-gesture-handler'

import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'

import Home from '../react-shop-main/screens/Home'
import Profile from '../react-shop-main/screens/Profile'
import Settings from '../react-shop-main/screens/Settings'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import IonicIcons from 'react-native-vector-icons/Ionicons'
import FontAwsome from 'react-native-vector-icons/FontAwesome5'
import {useDispatch, useSelector} from 'react-redux'
import CustomDrawer from './components/CustomDrawer'
import ProductDetails from './components/ProductDetails'
import {useEffect} from 'react'
import {getLang, setLang} from './localStore/localStore'
import {I18n} from 'i18n-js'
import * as Locales from './locale/locale'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Success from "./screens/Success";
import MyOrdersScreen from "./screens/MyOrdersScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";

const Nav = () => {
    const Drawer = createDrawerNavigator();

    const dispatch = useDispatch();


    useEffect(() => {

        AsyncStorage.getItem('cashedLang').then(response => {

            if (response) {

                dispatch(setLang(response))

            }

        })


    }, [])


    const currentLang = useSelector(getLang)

    const i18n = new I18n(Locales)
    i18n.locale = currentLang


    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{

                drawerActiveBackgroundColor: '#B95CF4',
                drawerActiveTintColor: 'white'

            }}

                              drawerContent={(props) => <CustomDrawer {...props}/>}

            >

                <Drawer.Screen

                    name={i18n.t('menu.home')}
                    component={Home}
                    options={{
                        headerShown: false,
                        drawerIcon: (props) => <EntypoIcons name='home' size={20} color={props.color}/>,
                        drawerLabelStyle: {marginLeft: -25}
                    }}

                />
                <Drawer.Screen
                    options={{
                        drawerIcon: (props) => <EntypoIcons name='user' size={20} color={props.color}/>,
                        drawerLabelStyle: {marginLeft: -25}
                    }}

                    name={i18n.t('menu.profile')}
                    component={Profile}
                />

                <Drawer.Screen
                    options={{
                        drawerIcon: (props) => <IonicIcons name='settings-sharp' size={20} color={props.color}/>,
                        drawerLabelStyle: {marginLeft: -25}
                    }}
                    name={i18n.t('menu.settings')}
                    component={Settings}
                />

                <Drawer.Screen
                    name='ProductDetails'
                    component={ProductDetails}
                    options={{
                        drawerItemStyle: {display: 'none'}
                    }}
                />

                <Drawer.Screen name="Cart" component={Cart}
                               options={{
                                   drawerItemStyle: {display: 'none'}
                               }}
                />

                <Drawer.Screen name="Checkout" component={Checkout}
                               options={{
                                   drawerItemStyle: {display: 'none'}
                               }}/>

                <Drawer.Screen name="Success" component={Success}
                               options={{
                                   drawerItemStyle: {display: 'none'}
                               }}/>

                <Drawer.Screen name={i18n.t('menu.myOrders')} component={MyOrdersScreen}
                               options={{
                                   drawerIcon: (props) => <FontAwsome name='receipt' size={20} color={props.color}/>,
                                   drawerLabelStyle: {marginLeft: -25}

                               }}/>

                <Drawer.Screen name="OrderDetails" component={OrderDetailsScreen}
                               options={{
                                   drawerItemStyle: {display: 'none'},

                               }}/>


            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Nav
