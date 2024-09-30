import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const RegistroScreen = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const baseUrl = ' https://viable-rhino-informally.ngrok-free.app'; 
    
    const handleRegister = async () => {
      try {
        const response = await axios.post(`${baseUrl}/api/user/register`, {
          nombre,
          apellido,
          username,
          password,
        });

        if (response.data.success) {
          Alert.alert('Register Exitoso', 'Ingresaste correctamente.', [
            { text: 'OK', onPress: () => navigation.replace('EventosScreen') },
          ]);
        } else {
          Alert.alert('Error', 'Usuario, nombre, apellido o contraseña incorrecta.');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Hubo un problema al intentar iniciar sesión.');
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Registrarse</Text>
  
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          value={nombre} 
          onChangeText={setNombre}
        />
  
        <TextInput
          placeholder="Apellido"
          style={styles.input}
          value={apellido}
          onChangeText={setApellido}
        />
  
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
  
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
  
        <Button title="Registrarse" onPress={handleRegister} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 40,
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  });

export default RegistroScreen;