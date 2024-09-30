import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const perfilScreen = () => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('https://viable-rhino-informally.ngrok-free.app'); 
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigation.replace('LoginScreen');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Error al cargar el perfil del usuario</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      
      {/* Mostrar la imagen del usuario */}
      {user.image && (
        <Image source={{ uri: user.image }} style={styles.profileImage} />
      )}

      {/* Mostrar el nombre y apellido del usuario */}
      <Text style={styles.info}>Nombre: {user.nombre}</Text>
      <Text style={styles.info}>Apellido: {user.apellido}</Text>

      {/* Botón de deslogueo */}
      <Button title="Cerrar Sesión" onPress={handleLogout} />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default perfilScreen;