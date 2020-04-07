import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {View,Image, Text, TouchableOpacity, TextInput} from 'react-native';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import styles from './styles'
export default function Login(){

    const navigation = useNavigation();

    function navigatetoRegister(){

        navigation.navigate('Register');
    }

    function Submit(){
        navigation.navigate('Home');
    }

    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg}/>
        </View>
        <View style={styles.form}>
            <Text style={styles.title}>Entre com seu e-mail:</Text>
            <TextInput style={styles.input} placeholder={"Email"}/>
            <TextInput style={styles.input} placeholder={"Senha"}/>
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