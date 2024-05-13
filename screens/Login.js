import React, {useState} from "react";
import {View, Button, TextInput, ScrollView, StyleSheet} from "react-native";
import{NavigationContainer} from '@react-navigation/native';


const Login = () => {

    const [State, setState] = useState({
        user: '',
        password: '' 
    })
    

    const handleChangeText = (nombre, value) =>{
        setState({...State, [nombre]: value })
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
                <Button title="Ingresar" onPress={() => console.log(State)}/> 
            </View>
            <View>
                <Button title="Registrarse"
                onPress={() => navigation.navigate('Registrar')}
                /> 
            </View>
            
        </ScrollView>
    )
}

export default Login