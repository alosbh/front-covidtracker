import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {View,Image, Text, TouchableOpacity, TextInput} from 'react-native';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import styles from './styles'
export default function Home(){

    const navigation = useNavigation();

    function navigatetoRegister(){

        navigation.navigate('Register');
    }

    function Submit(){
        navigation.navigate('Home');
    }

    return(
    <View style={styles.container}>
        <Text>Home</Text>

    </View>
        
    )
}