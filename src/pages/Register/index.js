import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {View,Image, Text, TouchableOpacity, TextInput,Alert} from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import styles from './styles'
export default function Login(){

    const navigation = useNavigation();

    const [Email, setEmail] = useState('');
    
    const [EmailConfirm, setEmailConfirm] = useState('');

    const [Password, setPassword] = useState('');
    
    const [PasswordConfirm, setpasswordConfirm] = useState('');

    const [Name, setName] = useState('');

    const [BirthDate,setBirthDate] = useState('');

    const [Department, setDepartment] = useState('');

    const [Site, setSite] = useState('');


    async function handleSubmit(){

    
        const data={
            Email,
            // EmailConfirm,
            Password,
            // PasswordConfirm,
            Name,
            BirthDate,
            Department,
            Site
        }

        try {
            
            const response = await api.post('/labor',data);
            Alert.alert(
                'Cadastro realizado.',
                `Acesse com seu email ${response.data.newLabor[0].Email}`,
            )
            

            
            navigation.navigate('Login');
        }
        catch(err){
            alert('Erro no cadastro. tente novamente');
        }
        

    }
    function navigatetoBack(){

        navigation.goBack();
    }

return(
<View style={styles.container}>
    <View style={styles.header}>
        <Image source={logoImg}/>
    </View>
    <View style={styles.form}>
        <Text style={styles.title}>Faça seu cadastro:</Text>

        <TextInput
            style={styles.input} 
            placeholder={"Email"}
            value={Email}
            onChangeText={text=> setEmail(text)}   
        />
        <TextInput
            style={styles.input} 
            placeholder={"Confirme o Email"}
            value={EmailConfirm}
            onChangeText={text=> setEmailConfirm(text)}   
        />
        <TextInput
            style={styles.input} 
            placeholder={"Senha"}
            value={Password}
            secureTextEntry={true}
            onChangeText={text=> setPassword(text)}   
        />
        <TextInput
            style={styles.input} 
            placeholder={"Confirme a Senha"}
            value={PasswordConfirm}            
            secureTextEntry={true}
            onChangeText={text=> setpasswordConfirm(text)}   
        />
        <TextInput
            style={styles.input} 
            placeholder={"Nome Completo"}
            value={Name}
            onChangeText={text=> setName(text)}   
        />
        <TextInput
            style={styles.input} 
            placeholder={"Data de Nascimento"}
            value={BirthDate}
            onChangeText={text=> setBirthDate(text)}   
        />
        <View style={styles.combobox}>
            <TextInput
                style={styles.inputCombo} 
                placeholder={"Departamento"}
                value={Department}
                onChangeText={text=> setDepartment(text)}   
            />
            <TextInput
                style={styles.inputCombo} 
                placeholder={"Site"}
                value={Site}
                onChangeText={text=> setSite(text)}   
            />
        </View>
        
        
    </View>
    <View style={styles.options}>
        <TouchableOpacity
        style={styles.button}
        onPress={navigatetoBack}>
            <Feather 
            size={20}
            name={'arrow-left'}/>
            <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}>
            <Text style={styles.buttonText}>Confirmar</Text>
            <Feather 
            size={20}
            name={'arrow-right'}/>
            
        </TouchableOpacity>
    </View>

</View>
    
)}