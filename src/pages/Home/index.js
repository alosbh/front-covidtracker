import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'
import {View,Image, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import moment from 'moment';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import styles from './styles'
export default function Home(){

    const navigation = useNavigation();

    const [CheckDialog, turnCheckDialog] = useState(false);

    const [firstCheck, setfirstCheck] = useState('0');

    const [secondCheck, setsecondCheck] = useState('0');

    var DateNow;
    
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
    async function handleCheck(e){

        DateNow = getTime();
        if(DateNow=>16){
            setsecondCheck(e);
        }
        else{
            setfirstCheck(e);
        }
        
        
        turnCheckDialog(false);
        
        

    }
    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg}/>
            <Text>Terça-Feira. 7 de Abril de 2020</Text>
        </View>
        <View style={styles.body}>
            <Text>Como você está se sentindo hoje?</Text>
            <View style={styles.thumbsbox}>
                <TouchableOpacity>
                    <Feather name={'thumbs-up'}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name={'thumbs-down'}/>
                </TouchableOpacity>
            </View>
            
            <View style={styles.checkbox}>
                <TouchableOpacity onPress={handlefirstCheck}>
                    <Text>1ª Medição (00:00 as 16:00):</Text>
                    <Feather name={'thermometer'}/>
                    <Text>{firstCheck}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlesecondCheck}>
                    <Text>2ª Medição (16:00 as 00:00):</Text>
                    <Feather name={'thermometer'}/>
                    <Text>{secondCheck}</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        <DialogInput isDialogVisible={CheckDialog}
                    title={""}
                    message={"Insira sua medição de temperatura"}
                    hintInput ={"Ex: 36,8"}
                    submitInput={ (inputText) => {handleCheck(inputText)} }
                    closeDialog={ () => {turnCheckDialog(false)}}>
        </DialogInput>

    </View>
        
    )
}