import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./src/routes/tabRoutes";

export default function App() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}