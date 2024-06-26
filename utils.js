import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';

const DATABASE_PATH = 'database.json'

export const readDatabase = async () => {
  try {
    const json = await FileSystem.readAsStringAsync(DATABASE_PATH);
    return JSON.parse(json);
  } catch (error) {
    console.log("Error reading database:", error);
    return { users: [] };
  }
};

export const writeDatabase = async (data) => {
  try {
    await FileSystem.writeAsStringAsync(DATABASE_PATH, JSON.stringify(data));
  } catch (error) {
    console.log("Error writing database:", error);
  }
};
