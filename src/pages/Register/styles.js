import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

container:{
    flex:1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor:'#d7d7d7'
},
header:{
    alignItems:'center'


},
form:{
    marginTop:20,
    flexDirection:'column',
    alignItems:'center',


},
title:{
    fontSize:18,
    marginBottom:10,
    color:'#13131a',
    fontWeight:'bold',
    alignItems: 'stretch'

},

input:{
    width:300,
    height:40,
    borderWidth:1,
    borderRadius:4,
    borderColor:'#000',
    backgroundColor:'#FFF',
    padding:10,
    margin:2
    
},
inputCombo:{
    width:148,
    height:40,
    borderWidth:1,
    borderRadius:4,
    borderColor:'#000',
    backgroundColor:'#FFF',
    padding:10,
    margin:2
    
},
combobox:{
    flexDirection:'row',
    justifyContent:'space-between'
    
},
options:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:50,
    padding:20
    
    
},
button:{
    
    
    
    width:120,
    height:30,
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center'
},

buttonText:{

    fontSize:18,
    fontWeight:'bold',
    margin:10
}






})