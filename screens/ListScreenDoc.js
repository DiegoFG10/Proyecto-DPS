import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';


const datos = [
  { id: '1', nombreCompleto: 'Ana López' },
  { id: '2', nombreCompleto: 'Carlos Martínez' },
  { id: '3', nombreCompleto: 'Sofía Rodríguez' },
  { id: '4', nombreCompleto: 'Miguel Hernández' },
  { id: '5', nombreCompleto: 'Laura González' },
  { id: '6', nombreCompleto: 'David Sánchez' },
  { id: '7', nombreCompleto: 'Isabel Ramírez' },
  { id: '8', nombreCompleto: 'Javier Torres' },
];

const Listado = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.nombre}>{item.nombreCompleto}</Text>
      <View style={styles.botonesContainer}>
        <Button 
        color="black" 
        title="Delete"  style={styles.boton} />
        <Button 
        color="black"
        title="Update"  style={styles.boton} />
      </View>
    </View>
  ); 
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titulo}>Doctores</Text>
        <Button 
        color="black"
        title="Crear" style={styles.boton} />
      </View>
      <FlatList
        data={datos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0', // Light background color
    padding: 15,
    elevation: 3, // Shadow for Android (adjust value as needed)
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  listContent: {
    paddingHorizontal: 10,
    padding: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nombre: {
    fontSize: 16,
  },
  botonesContainer: {
    flexDirection: 'row',
  },
  boton: {
    marginHorizontal: 5,
  },
});

export default Listado;
