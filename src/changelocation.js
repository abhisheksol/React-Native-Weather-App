import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function Change_Location() {
    const navigation = useNavigation();
    const [city, setCity] = useState('Mumbai');
    
    const handleCreate = () => {
        navigation.navigate('Home', { name_city: city });
    };

    return (
        <LinearGradient colors={['#0F2027', '#203A43', '#2C5364']} style={styles.container}>
            <Text style={{color:'white',fontSize:42,marginBottom:50}} > Set Home Location</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Add City'
                    placeholderTextColor='white'
                    onChangeText={(text) => setCity(text)}
                    style={styles.input}
                />
            </View>

            <TouchableOpacity onPress={handleCreate} style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        justifyContent: 'space-between',
        width:'80%',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    input: {
        flex: 1, // Use flex: 1 to allow the input to take up remaining space
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'white',
        height: 50,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 16,
        color: '#444479',
        fontWeight: 'bold',
    },
});

export default Change_Location;
