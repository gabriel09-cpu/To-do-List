import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import useStorage from "../../hooks/useStorage";

export default function Tasks() {
    
    const storage = useStorage();

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    async function loadTasks() {
        const storedTasks = await storage.get("tasks");
        setTasks(storedTasks)
    }

    const deleteTask = async (id) => {
        const filtered = tasks.filter(task => task.id !== id);
        setTasks(filtered)
        await storage.save("tasks", filtered)
    };
    
    const updated = tasks.map(task => 
        task.id === id ? { ...task, done: true } : task)
};
