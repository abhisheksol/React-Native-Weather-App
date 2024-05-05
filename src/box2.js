import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/Entypo';

function Box2() {

    const sunrise = "6:00 am";
    const sunset = "6:48 pm";

    return (
        <View>
            <TouchableOpacity>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 30, height: 140, marginTop: 40 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 28 ,flexDirection:'row'}}>
                    
                        <View style={{ flexDirection: '', alignItems: 'center',marginRight:45,marginBottom:85}}>
                            <Icon name="weather-sunset-up" size={55} color='yellow' />
                            
                            <Text style={{ color: 'white', marginLeft: 10, fontSize: 20, marginRight: 10 }}>
                                Sunrise
                            </Text>
                            
                            <Text style={{ color: '#787979' }}>{sunrise}</Text>
                            </View>
                       
                        <View style={{ flexDirection: '', alignItems: 'center', marginTop: 0,marginBottom:85 }}>
                        <Icon name="weather-sunset-down" size={55} color='#FFA500' />
                            <Text style={{ color: 'white', marginLeft: 10, fontSize: 20, marginRight: 10 }}>
                                Sunset
                            </Text>
                            <Text style={{ color: '#787979' }}>{sunset}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Box2;

