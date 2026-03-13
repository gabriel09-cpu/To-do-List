import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Modal, TextInput, Image } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import Logo from "../../../assets/gerenciamento-de-projetos.png"

export default function Main() {
  
  const storage = useStorage();

  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks(){
    const storedTasks = await storage.get("tasks");
    setTasks(storedTasks || []);
  }

  const addTask = async () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: task,
      date: new Date().toLocaleDateString(),
      done: false,
    };

    const updatedTasks = [...tasks, newTask];

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
      <View style={styles.imageLogo}>
        <Image source={Logo} style={styles.logo}/>
      </View>
      <View style={styles.newTask}>
        <TouchableOpacity
          style={styles.addbutton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons
            name="add"
            size={60}
            color={"#000"}
            style={styles.addButtonText}
          />
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
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
