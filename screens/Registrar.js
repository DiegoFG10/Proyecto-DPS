import React, {useState} from "react";
import {View, Button, TextInput, ScrollView, StyleSheet} from "react-native";
import{NavigationContainer} from '@react-navigation/native';
import firebase from "../database/firebase";
import { Firestore } from "firebase/firestore";



const Registrar = () => {

    const [State, setState] = useState({
        user: '',
        password: '',
        confirmPasword: ''
    })
    

    const handleChangeText = (nombre, value) =>{
        setState({...State, [nombre]: value })
    }

    const addCuenta = async () => {
        await ('Registros').add({
                Usuario: State.user,
                Password: State.password,
                ConfirmsPassword: State.confirmPasword
            })
            alert('Registro Guardado')
        
    }


    return (
        <ScrollView>
            <View>
                <TextInput 
                placeholder="UserName" 
                onChangeText={(value) =>handleChangeText('user', value)}
                />
            </View>
            <View>
                <TextInput 
                placeholder="Password"
                onChangeText={(value) =>handleChangeText('password', value)} />
            </View>
            <View>
                <TextInput 
                placeholder="confirm Password"
                onChangeText={(value) =>handleChangeText('confirmpassword', value)} />
            </View>
            <View>
                <Button title="Registrarse"  
                onPress={() => addCuenta()}
                /> 
            </View>
            <View>
                <Button title="Regresar"  
                /> 
            </View>
        </ScrollView>
    )
}

export default Registrar