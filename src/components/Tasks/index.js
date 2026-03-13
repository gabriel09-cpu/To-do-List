import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useState, useCallback } from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import useStorage from "../../hooks/useStorage";
import { styles } from "./style";
import { useFocusEffect } from "@react-navigation/native";


export default function Tasks() {

  const storage = useStorage();

  const [tasks, setTasks] = useState([]);

  useFocusEffect(
  useCallback(() => {
    loadTasks();
  }, [])
);

  async function loadTasks(){
    const storedTasks = await storage.get("tasks");
    setTasks(storedTasks);
  }

  const deleteTask = async (id) => {

    const filtered = tasks.filter(task => task.id !== id);

    setTasks(filtered);

    await storage.save("tasks", filtered);
  };

  const completeTask = async (id) => {

    const updated = tasks.map(task =>
      task.id === id ? { ...task, done: true } : task
    );

    setTasks(updated);

    await storage.save("tasks", updated);
  };

  const pendingTasks = tasks.filter(task => !task.done);

  return (

    <View style={styles.container}>
        <Text style={styles.titlePage}>Tarefas Pendentes</Text>
    <FlatList
    style={styles.list}
      data={pendingTasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (

        <View style={styles.listContainer}>

          {/* Botão excluir */}
            <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteTask}>
            <Ionicons name="trash" size={24} color="red"/>
          </TouchableOpacity>

          <Text style={styles.title}>{item.title}</Text>

          {/* Checkbox */}
          <TouchableOpacity onPress={() => completeTask(item.id)} style={styles.checkTask}>
            <Ionicons name="checkbox-outline" size={24}/>
          </TouchableOpacity>

        </View>

      )}
    />
    </View>
  );
}