import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

container:{
    flex:1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor:'#d7d7d7'

},
header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10


},
headerText:{
    padding:5,
    fontSize:20
    
},
headerTextBold:{

    fontWeight:'bold'
},
body:{
    flexDirection:'column',
    alignItems:'center'
},
title:{
    fontSize:18,
    color:'#13131a',
    padding:10
},

thumbsbox:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:200,
    margin:50,
    marginTop:20
},
textDescription:{
    fontSize:18,
    color:'#13131a',
    padding:30

},

checkbox:{
    flexDirection:'column',
    justifyContent:'space-between'
},

inputbutton:{
    borderWidth:1,
    width:300,
    borderRadius:2,
    margin: 5,
    backgroundColor:'#FFF'
    
}




})