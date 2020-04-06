import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {View,Image, Text, TouchableOpacity, TextInput} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
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
        <Text style={styles.title}>Faça seu cadastro:</Text>

        <TextInput style={styles.input} placeholder={"Email"}/>
        <TextInput style={styles.input} placeholder={"Confirme o Email"}/>
        <TextInput style={styles.input} placeholder={"Crie uma Senha"}/>
        <TextInput style={styles.input} placeholder={"Confirme a senha"}/>
        <TextInput style={styles.input} placeholder={"Nome"}/>
        <TextInput style={styles.input} placeholder={"Data de nascimento"}/>
        <TextInput style={styles.input} placeholder={"Departamento"}/>
        <TextInput style={styles.input} placeholder={"Site"}/>
        
        
    </View>
    <View style={styles.options}>
        <TouchableOpacity>
            <Text>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Confirmar</Text>
        </TouchableOpacity>
    </View>

</View>
    
)}