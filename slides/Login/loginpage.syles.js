import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Input: {
    flex:1,
    gap:10,
  },
  TextInput:{
  height: 40,
  marginTop:20,
  paddingHorizontal:10,
  width: 300,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 5,
  },
   SignIn: {
    flex:1,
    width:300,
    padding:10,
    marginTop:10,
    flexDirection:'row',
  },
  signInText:{
    color:'#0077b6'
  },
  Login: {
    height: 40,
    width: 200,
    marginTop:50,
    borderColor:'#00b4d8',
    backgroundColor:'#00b4d8',
    padding:10,
    borderWidth: 1,
    borderRadius: 5,
  },
  loginText:{
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center'
  }
  
 
});

export default styles;
