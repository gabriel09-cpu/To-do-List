import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5e97ff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  content: {
    alignItems: "flex-start",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },

  addbutton: {
    position: "absolute",
    bottom: 40,
    right: 30,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 12,
    elevation: 6,
  },

  modalContainer: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  modalBox: {
    backgroundColor: "#fff",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },

  buttonArea: {
    flexDirection: "row",
    width: "90%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    flex: 1,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
  },

  buttonSave: {
    backgroundColor: "#00fa60",
    borderRadius: 8,
  },

  textInput: {
    backgroundColor: "#a8a8a879",
    width: 300,
    borderRadius: 16,
  },

  newTask: {
    flex: 1,
    alignItems: "center",
  },

  imageLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },

  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
