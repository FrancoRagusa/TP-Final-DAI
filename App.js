import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreens/LoginScreen";
import RegistroScreen from './screens/LoginScreens/RegistroScreen';
import EventosScreen from "./screens/LoginScreens/EventosScreens/EventoScreen";
import detalleEventoScreen from "./screens/LoginScreens/EventosScreens/detalleEventoScreen";
import categoriaScreen from './screens/LoginScreens/CategoriaScreen.js/categoriaScreen';
import perfilScreen from './screens/LoginScreens/PerfilScreen.js/perfilScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="detalleEventoScreen"
        component={detalleEventoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="categoriaScreen"
        component={CategoriasScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="perfilScreen"
        component={perfilScreen}
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
          name="MainTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventosScreen"
          component={EventosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detalleEventoScreen"
          component={detalleEventoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="categoriaScreen"
          component={categoriaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="perfilScreen"
          component={perfilScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}