import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Input: {
    flex:1,
    gap:10,
  },
  TextInput:{
  height: 40,
  marginTop:10,
  paddingHorizontal:10,
  width: 300,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 5,
  },
  Button: {
    height: 40,
    width: 200,
    borderColor: '#00b4d8',
    backgroundColor:'#00b4d8',
    marginTop:30,
    color: '#fff',
    padding:10,
    borderWidth: 1,
    borderRadius: 5,
  },
  LoginIn: {
    flex:1,
    width:300,
    padding:10,
    marginTop:10,
    flexDirection:'row',
  },
  loginText:{
    color:'#0077b6'
  },
 
});

export default styles;
