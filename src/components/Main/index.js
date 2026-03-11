import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Modal, TextInput } from "react-native";
import { styles } from "./styles";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useState } from "react";
import useStorage from "../../hooks/useStorage";

export default function Main() {
  const storage = useStorage();
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  

  const addTask = async () => {
    if (task.trim() === "") return;

    const newTasks = {
      id: Date.now(),
      titles: task,
      date: new Date().toLocaleDateString(),
      done: false,
    };

    const updatedTasks = [...tasks, newTasks];

    setTasks(updatedTasks);
    await storage.save("tasks", updatedTasks);

    setTask("");
    setModalVisible(false);
  };

  return (

      
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lista de Tarefas</Text>
      </View>

      <View style={styles.newtask}>
        <TouchableOpacity
          style={styles.addbutton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons
            name="add"
            size={60}
            color={"#000"}
            style={styles.addbuttontext}
          />
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Nova Tarefa</Text>
            <TextInput 
            style={styles.textInput} 
            placeholder="Tarefa" 
            value={task}
            onChangeText={setTask}/>

            <View style={styles.buttonArea}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.buttonSave, styles.button]} onPress={addTask}>
                <Text>Salvar Tarefa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>

    
  );
}
