import { useNavigation } from "@react-navigation/native";
import {View,Image,Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = ()=>{
    const myNavigation = useNavigation()

    const handlePhonePress = () => {
        Linking.openURL('tel:593401169');
    };

    const handleEmailPress = () => {
        Linking.openURL('mailto:salome.kvatatdze@ug.edu.ge');
    };

    return(
        
        <View style={customCss.mainBox}>
            <Image  source={{ uri: 'https://i.pinimg.com/originals/87/69/40/8769409170c716a409164966f4256f01.png' }} style={{width:160, height:160, }}/>
            <View style={customCss.mainBox}>
                <Text style={{fontSize:25, marginTop:10}}>Salome Kvatadze</Text>
                <Text>Da best developaaa</Text>
                <TouchableOpacity onPress={handlePhonePress}>
                        <Text style={{ fontSize: 18, marginTop: 10 }}><AntDesign name='phone' size={18} /> 593 401 169</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleEmailPress}>
                        <Text style={{ fontSize: 18, marginTop: 10, alignItems: 'center' }}>
                            <MaterialIcons name='alternate-email' size={18} /> salome.kvatatdze@ug.edu.ge
                        </Text>
                    </TouchableOpacity>
                <Text style={{fontSize:18, marginTop:20, textAlign:'center'}}> 300$ და ყველაფერ დეველოპერულზე ვარ წამსვლელი &#128176; თან სამსახურიდან მოვდივარ შემოდგომაზე და ფინანსური სირთულეების გამო ალბათ აკადემიურის აღება მომიწევს &#128546;</Text>
            </View>
        </View>
    )
}

export default Profile

const customCss = StyleSheet.create({
    mainBox:{
        width:'100%',
        border:'2',
        alignItems:'center',
        marginTop:50
    },
    italicText:{
        // ar mushaobs
        fontStyle:'italic'
    }
})
