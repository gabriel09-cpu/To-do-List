import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#5e97ff",
  },
  content: {
    top: 60,
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
  },

  addbutton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    top: 580,
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
    }
});
