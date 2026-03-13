import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#5e97ff"
  },

  titlePage:{
    fontSize:26,
    fontWeight:"bold",
    color:"#fff",
    marginTop:50,
    marginBottom:20,
    marginLeft:20
  },

  list:{
    flex:1,
    paddingHorizontal:16
  },

  listContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",

    backgroundColor:"#fff",
    paddingVertical:16,
    paddingHorizontal:18,

    marginBottom:14,

    borderRadius:16,

    shadowColor:"#000",
    shadowOffset:{ width:0, height:4 },
    shadowOpacity:0.08,
    shadowRadius:6,

    elevation:4
  },

  title:{
    flex:1,
    fontSize:17,
    fontWeight:"600",
    color:"#2D3436",
    marginHorizontal:12
  },

  deleteTask:{
    backgroundColor:"#FFECEC",
    padding:8,
    borderRadius:10
  },

  checkTask:{
    backgroundColor:"#EAF7EF",
    padding:8,
    borderRadius:10
  }

});