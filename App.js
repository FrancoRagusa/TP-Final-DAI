import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreens/LoginScreen.js";
import RegistroScreen from "./screens/LoginScreens/RegistroScreen.js";
import EventosScreen from "./screens/LoginScreens/EventosScreens/EventoScreen.js";
import DetalleEventosScreen from "./screens/LoginScreens/EventosScreens/detalleEventoScreen.js";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriasScreen from "./screens/LoginScreens/CategoriaScreen.js/categoriaScreen.js";
import EventosPorCategoriaScreen from "./screens/LoginScreens/CategoriaScreen.js/EventosPorCategoriaScreen.js"; 
import PerfilScreen from "./screens/LoginScreens/PerfilScreen.js/perfilScreen.js";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DetalleEventosScreen"
        component={DetalleEventosScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CategoriasScreen"
        component={CategoriasScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistroScreen"
          component={RegistroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventosScreen"
          component={EventosScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="DetalleEventosScreen"
          component={DetalleEventosScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="CategoriasScreen"
          component={CategoriasScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventosPorCategoriaScreen"
          component={EventosPorCategoriaScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="PerfilScreen"
          component={PerfilScreen}
          options={{ headerShown: false }}
        />
        {/* Anida MyTabs dentro del Stack */}
        <Stack.Screen
          name="MainTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}