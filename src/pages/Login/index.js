import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {View,Image, Text, TouchableOpacity, TextInput} from 'react-native';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import styles from './styles'
export default function Login(){

return(
<View style={styles.container}>
    <View style={styles.header}>
        <Image source={logoImg}/>
    </View>
    <View style={styles.form}>
        <Text style={styles.title}>Entre com seu e-mail:</Text>
        <TextInput style={styles.input} placeholder={"Email"}/>
        <TouchableOpacity>
            <Text>Não tenho cadastro</Text>
        </TouchableOpacity>
    </View>

</View>
    
)}