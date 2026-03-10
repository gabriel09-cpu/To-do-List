import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => { 
    const save = async (key, value) => {
        try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch(error) {
        console.log("Erro ao Salvar", error);

    }

};

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value != null ? JSON.parse(value) : [];
    } catch (error) {
        console.log("Erro a buscar", error);
        return [];

    }

};
return {
    save,
    get
  };

};

export default useStorage;