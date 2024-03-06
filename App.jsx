import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/Home";
import Contact from "./src/screens/Contact";
import Profile from "./src/screens/Profile";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contato" component={Contact} />
        <Drawer.Screen name="Perfil" component={Profile} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
