import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
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
  Button: {
    height: 40,
    width: 300,
    borderColor: 'blue',
    backgroundColor:'#fff',
    marginTop:50,
    padding:10,
    borderWidth: 1,
    borderRadius: 5,
  },
  Login: {
    height: 40,
    width: 200,
    marginTop:50,
    backgroundColor:'blue',
    padding:10,
    borderColor: 'gray',
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
