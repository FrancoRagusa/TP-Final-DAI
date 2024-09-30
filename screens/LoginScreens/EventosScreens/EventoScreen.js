import React, { useState, useEffect } from "react";
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,ActivityIndicator} from "react-native";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

const EventosScreen = () => {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const baseUrl = "https://viable-rhino-informally.ngrok-free.app";
  
    const fetchEventos = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/event`);
        console.log("Datos recibidos:", response.data.events.length);
        setEventos(response.data.events);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchEventos();
    }, []);
  
    const renderEventItem = (item) => (
      <TouchableOpacity
        key={item.id}
        style={styles.eventContainer}
        onPress={() =>
          navigation.navigate("DetalleEventosScreen", { eventId: item.id })
        }
      >
        <Text style={styles.eventName}>{item.name}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
        <Text style={styles.eventDetails}>
          Fecha: {new Date(item.start_date).toLocaleDateString()}
        </Text>
      </TouchableOpacity>
    );
  
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>EVENTOS</Text>
        <ScrollView contentContainerStyle={styles.listContainer}>
          {eventos.length > 0 ? (
            eventos.map(renderEventItem)
          ) : (
            <Text style={styles.noEventsText}>No hay eventos disponibles</Text>
          )}
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f0f0",
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      padding: 16,
      backgroundColor: "#ffffff",
    },
    listContainer: {
      padding: 16,
    },
    eventContainer: {
      backgroundColor: "#ffffff",
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    eventName: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
    },
    eventDescription: {
      fontSize: 14,
      color: "#333",
      marginBottom: 8,
    },
    eventDetails: {
      fontSize: 12,
      color: "#666",
      marginBottom: 4,
    },
    noEventsText: {
      fontSize: 16,
      textAlign: "center",
      marginTop: 20,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "white",
      paddingVertical: 12,
      borderTopWidth: 1,
      borderTopColor: "#E0E0E0",
    },
  });
  
  export default EventosScreen;