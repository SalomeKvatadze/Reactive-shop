import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { Image, View,Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useDispatch } from "react-redux"
import { setLang } from "../localStore/localStore"


const CustomDrawer=(props)=>{

     const dispatch=useDispatch();

    return(

       <DrawerContentScrollView {...props}>
        <View style={{width:'100%',height:200,backgroundColor:'orange',justifyContent:'center',alignItems:'center'}}>
        <Image  
                    source={{ uri: 'https://i.pinimg.com/originals/87/69/40/8769409170c716a409164966f4256f01.png' }}
                style={{ width: 100, height: 100 }}
        />

            <Text style={{
                color:'white',
            fontSize:20
            ,marginTop:10,
            fontWeight:'bold'
            }}>სალომე ქვათაძე</Text>
        
        </View>
            <DrawerItemList {...props}/>


            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View>
                    <TouchableOpacity
                        onPress={()=>{

                        dispatch(setLang('GE'));

                        }}
                    >
                        <Text>
                            ქართ.
                        </Text>
                    </TouchableOpacity>
                </View>

            <View>
                <TouchableOpacity 
                    onPress={()=>{

                    dispatch(setLang('EN'));

                    }}
                >
                        <Text>
                            Eng.
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
       </DrawerContentScrollView>

    )


}


export default CustomDrawer