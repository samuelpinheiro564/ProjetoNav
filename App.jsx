import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/home";
import Contact from "./src/screens/contact";
import Profile from "./src/screens/profile";

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
