import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
    paddingTop:10,   
  },
  NavBar:{
    justifyContent:'flex-start',
    height:80,
  },
  horizontalScroll:{
    padding:10,
    width:'100%',
  },
  ScrollElements:{
    padding:10,
    borderWidth: 1,
    borderColor:'gray',
    backgroundColor:'#ceced1',
  },
  profile:{
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor:"#ceced1",
  },
});

export default styles;
