import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRoutes } from "./src/routes/AppRoutes";

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#8DC39C" }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}