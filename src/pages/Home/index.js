import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'
import {View,Image, Text, TouchableOpacity, TextInput, Alert, AsyncStorage} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import moment from 'moment';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import styles from './styles'
export default function Home(){
    
    var userData;

    var DateNow;

    const navigation = useNavigation();

    const [CheckDialog, turnCheckDialog] = useState(false);

    const [firstCheck, setfirstCheck] = useState('Pendente');

    const [secondCheck, setsecondCheck] = useState('Pendente');

    const [Email, setEmail] = useState('');

    const [LaborID, setLaborID] = useState('');

    const [Name, setName] = useState('');

    useEffect(()=>{
        setUserVariables();
        
    },[]);

    async function setUserVariables(){
        userData = await AsyncStorage.getItem('user');
        const Credentials = JSON.parse(userData);
        
        setEmail(Credentials.Email);
        setLaborID(parseInt(Credentials.LaborID));
        setName(Credentials.Name);
        
    }



    function getTime(){
        
        var time = moment()        
        .hour();
        return time;
    }

    async function handlefirstCheck(){
        DateNow = getTime();
        
        if(DateNow>=16){
            Alert.alert('Essa medição expirou.')
        }
        else{
            turnCheckDialog(true);
        }
    }
    async function handlesecondCheck(){
        DateNow = getTime();
        
        if(DateNow<16){
            Alert.alert('Esta medição estará disponível para envio a partir de 16:00.')
        }
        else{
            turnCheckDialog(true);
        }
    }
    async function handleCheck(Measure){

        DateNow = getTime();
        if(DateNow=>16){
            setsecondCheck(Measure);

        }
        else{
            setfirstCheck(Measure);
        }

        
        var Time = moment();
        let data={
            LaborID,
            Measure,
            Time

        }
        const response = await api.post('/bodycheck',data);
        
        
        turnCheckDialog(false);
        
        

    }
    async function GetUserCredentials(){
        
    }
    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg}/>
            <Text style={styles.headerText}>Bem vindo, 
                <Text style={styles.headerTextBold}> {Name}</Text>.
            </Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.title}>Como você está se sentindo hoje?</Text>
            <View style={styles.thumbsbox}>
                <TouchableOpacity >
                    <Feather 
                    size={60}
                    color={'#32a852'}
                    name={'thumbs-up'}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather
                    size={60}
                    color={'#a83232'}
                    name={'thumbs-down'}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.textDescription}>Para sua segurança, pedimos que faça a medição de temperatura duas vezes ao dia.</Text>
            
            <View style={styles.checkbox}>
                <TouchableOpacity
                style={styles.inputbutton}
                onPress={handlefirstCheck}>
                    <Text>1ª Medição (00:00 as 16:00):</Text>
                    <Feather name={'thermometer'}/>
                    <Text>{firstCheck}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.inputbutton}
                onPress={handlesecondCheck}>
                    <Text>2ª Medição (16:00 as 00:00):</Text>
                    <Feather name={'thermometer'}/>
                    <Text>{secondCheck}</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        <DialogInput isDialogVisible={CheckDialog}
                    title={""}
                    message={"Insira sua medição de temperatura."}
                    hintInput ={"Ex: 36,8"}
                    submitInput={ (inputText) => {handleCheck(inputText)} }
                    closeDialog={ () => {turnCheckDialog(false)}}>
        </DialogInput>

    </View>
        
    )
}