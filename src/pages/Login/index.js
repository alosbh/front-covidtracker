import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {View,Image, Text, TouchableOpacity, TextInput,Alert, AsyncStorage} from 'react-native';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import styles from './styles'
export default function Login(){

    const navigation = useNavigation();
    
    const [Email, setEmail] = useState('');

    const [Password, setPassword] = useState('');

    async function navigatetoRegister(){

        navigation.navigate('Register');
        
    }

    async function storeUserCredentials(responseData){

        
        let user = {
            LaborID: responseData.data.user.id,
            Name: responseData.data.user.Name,
            Email: responseData.data.user.Email,
            
        }
        AsyncStorage.setItem('user',JSON.stringify(user));


    }
    async function Submit(){
        
        data= {Email, Password}

        try {
            const response = await api.post('Labor/login',data);
            
            if(response.status===200){

                storeUserCredentials(response);
                Alert.alert(
                    '',
                    'Login realizado com sucesso',
                    [
                      {text: 'OK', onPress: () => {navigation.navigate('Home')}},
                    ],
                    { cancelable: false }
                  )

                
            }
            else if(response.status===202){
                Alert.alert("Senha incorreta. Tente novamente")
            }
            
        }
        catch{
            Alert.alert('Erro no login. Tente novamente')
        }

        
    }

    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg}/>
        </View>
        <View style={styles.form}>
            <Text style={styles.title}>Entre com seu e-mail:</Text>
            
            <TextInput
                style={styles.input} 
                placeholder={"Email"}
                value={Email}
                onChangeText={text=> setEmail(text)}   
            />
            <TextInput
                style={styles.input} 
                placeholder={"Senha"}
                secureTextEntry={true}
                value={Password}
                onChangeText={text=> setPassword(text)}   
            />

            
            <TouchableOpacity onPress={navigatetoRegister}>
                <Text>Não tenho cadastro</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.options}>
        <TouchableOpacity onPress={Submit}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>

    </View>
        
    )
}