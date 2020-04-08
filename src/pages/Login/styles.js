import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

container:{
    flex:1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor:'#d7d7d7'

},
header:{
    paddingTop:50,
    alignItems: "center"


},
form:{
    flexDirection: 'column',
    alignItems:'center',
    



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
    
},
options:{
    alignItems:'center',
    marginTop:40
},
submit:{
    borderWidth:2,
    borderColor:'#000',
    borderRadius:5,
    width:250,
    height:40,
    alignItems:'center',
    backgroundColor:'#e7e7e7',

},
submitText:{
    fontWeight:'bold',
    fontSize: 18,
    padding:5
    
}





})