import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

container:{
    flex:1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor:'#d7d7d7'

},
header:{
    alignItems: "center"


},
form:{
    flexDirection: 'column',
    alignItems:'center',
    marginTop: 20



},
title:{
    fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight:'bold'

},

input:{
    width:200,
    height:40,
    borderWidth:1,
    borderRadius:8,
    borderColor:'#000',
    backgroundColor:'#FFF',
    padding:10,
    margin:10
    
}





})