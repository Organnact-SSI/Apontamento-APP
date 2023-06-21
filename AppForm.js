import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard, Image } from 'react-native';
import {Chamada} from './Chamada'


export default function AppForm({ navigation }) {

    const [empresa, setDescricao] = useState(''); 
    const [pedido, setQuantidade] = useState('');
    const url = "http://10.200.23.27:5002/Api/Producao/Apontamento";
    function handleDescriptionChange(empresa){ setDescricao(empresa); } 
    function handleQuantityChange(pedido){ setQuantidade(pedido); }
    async function handleButtonPress(){ 
      console.log({id: new Date().getTime(), empresa, pedido}); 
        
      props.navigation.navigate('Chamada');
    }
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}> 
        <Image source={require('./assets/logo.png')}style={{width: 400, height: 100, marginTop: 10}} />
            <Text style={styles.title}>Apontamento</Text>
            <View style={styles.inputContainerRow}> 
                <TextInput 
                style={styles.input}
                onChangeText={handleDescriptionChange} 
                placeholder="Empresa"
                keyboardType={'numeric'}
                clearButtonMode="always" /> 
                <TextInput 
                style={styles.input}
                onChangeText={handleQuantityChange}  
                placeholder="Pedido" 
                keyboardType={'numeric'}
                clearButtonMode="always" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}  
                placeholder="Item" 
                keyboardType={'numeric'}
                clearButtonMode="always" />
            
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}> 
                    <Text style={styles.buttonText}>Buscar</Text> 
                </TouchableOpacity> 
            </View>
            <StatusBar style="light" />
        </View>
    </TouchableWithoutFeedback>
      
    );

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#454241',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
    },
    inputContainerRow: {
      flex: 1,
      marginTop: 30,
      width: '90%',
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff',
      flexDirection: 'row'
    },
    inputContainer: {
        flex: 5,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
      },
    input: {
      marginTop: 10,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'stretch'
    },
    button: {
      marginTop: 10,
      height: 60,
      backgroundColor: 'blue',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      shadowOpacity: 20,
      shadowColor: '#ccc',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    }
  });