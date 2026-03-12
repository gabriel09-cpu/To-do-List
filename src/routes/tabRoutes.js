import Ionicons from "@react-native-vector-icons/ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "../components/Main";
import Tasks from "../components/Tasks";
import Done from "../components/Done";
const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {

          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Tasks") {
            iconName = "list";
          } else if (route.name === "Done") {
            iconName = "checkmark";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Done" component={Done} />
    </Tab.Navigator>
  );
}