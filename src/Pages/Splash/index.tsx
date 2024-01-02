import { Text, TouchableOpacity, View } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';




export default function Splash({navigation}){
    
    async function IsAuthenticated(){
        const teste = (await LocalAuthentication.authenticateAsync()).success
        if(teste){
           navigation.navigate('Home')
        }
    }

    useEffect(()=>{
        IsAuthenticated() 
    },[])

    return(
        <View style={{
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'

        }}>
            <TouchableOpacity onPress={IsAuthenticated}>
                <Ionicons name="ios-reload-outline" size={50} color="#3055ff" /> 
            </TouchableOpacity>
        </View>
    )
}