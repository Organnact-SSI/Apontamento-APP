import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import Database from './Database';

export default function AppForm({ route, navigation }) {
    const id = route.params ? route.params.id : undefined;
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');

    useEffect(() => {
        if (!route.params) return;
        setDescricao(route.params.descricao);
        setQuantidade(route.params.quantidade.toString());
    }, [route])

    function handleDescriptionChange(descricao) { setDescricao(descricao); }

    function handleQuantityChange(quantidade) { setQuantidade(quantidade); }

    async function handleButtonPress() {
        const listItem = { Empresa, Pedido: parseInt(quantidade) };
        Database.saveItem(listItem, id)
            .then(response => navigation.navigate("AppList", listItem));
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}> 
            <Image source={require('./assets/logo.png')}style={{width: 400, height: 100, marginTop: 10}} />
                <Text style={styles.title}>Apontamento Ordem de Produção</Text>
                <View style={styles.inputContainerRow}> 
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                    <TextInput 
                    style={styles.input}
                    onChangeText={handleDescriptionChange} 
                    placeholder="Empresa"
                    placeholderTextColor="#000" 
                    keyboardType={'numeric'}
                    clearButtonMode="always" />
                    <TextInput 
                    style={styles.input}
                    onChangeText={handleQuantityChange}  
                    placeholder="Pedido" 
                    placeholderTextColor="#000"
                    keyboardType={'numeric'}
                    clearButtonMode="always" />
                    </View>
                    <View style = {{flexDirection: 'row'}}>
                    <TextInput 
                    style={styles.input}
                    onChangeText={handleQuantityChange}  
                    placeholder="Data Inicial"
                    placeholderTextColor="#000" 
                    keyboardType={'numeric'}
                    clearButtonMode="always" />
                    <TextInput 
                    style={styles.input}
                    onChangeText={handleQuantityChange}  
                    placeholder="Data Fim"
                    placeholderTextColor="#000" 
                    keyboardType={'numeric'}
                    clearButtonMode="always" />
                    </View>
                    <View style={{marginTop:20}}>
                    <TouchableOpacity style={styles.button} onPress={handleButtonPress}> 
                        <Text style={styles.buttonText}>Buscar</Text> 
                    </TouchableOpacity> 
                    </View>
                </View>
                {/* <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}  
                    placeholder="Item" 
                    keyboardType={'numeric'}
                    clearButtonMode="always" />
                
                    <TouchableOpacity style={styles.button} onPress={handleButtonPress}> 
                        <Text style={styles.buttonText}>Buscar</Text> 
                    </TouchableOpacity> 
                </View> */}
                <StatusBar style="light" />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#025052',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#fff'
        
    },
    input: {
        marginTop: 10,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 50,
        fontSize: 16,
        marginLeft: 15
        
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#ffb400',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonContainer: {
        flexDirection: "row"
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
});