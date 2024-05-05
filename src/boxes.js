import React, { useEffect, useState } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/FontAwesome6';
import { log } from 'react-native-reanimated';

function Boxes(props) {
    const { uv, humidity, wind } = props;
    const [uvs, setuv] = useState('')
    const [humiditys, sethumiditys] = useState('')
    const [winds, setwinds] = useState('')
    

    useEffect(() => {
     setuv(uv)
     sethumiditys(humidity)
     setwinds(wind)
    }, [uv])
    
    return (
        <View>
            <TouchableOpacity>
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 30, height: 180, marginTop: 40 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: '', alignItems: 'center' }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 28 }}>
                        <Icon4 name="sun" size={55} color='yellow' />

                        <Text style={{ color: 'white', marginLeft: 22, fontSize: 20, marginRight: 22, marginTop: 14 }}>
                            UV Index
                        </Text>
                        <Text style={{ color: '#787979',fontSize:18,marginTop:5  }}>{uvs}</Text>
                    </View>

                    <View style={{ backgroundColor: 'grey', width: 2, height: 100, marginTop: 40 }}></View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 28 }}>
                        <Icon2 name="blood-drop" size={55} color='#B3C5D0' />

                        <Text style={{ color: 'white', marginLeft: 22, fontSize: 20, marginRight: 22, marginTop: 14 }}>
                            Humidity
                        </Text>
                        <Text style={{ color: '#787979',fontSize:18,marginTop:5 }}>{humiditys}%</Text>
                    </View>

                    <View style={{ backgroundColor: 'grey', width: 2, height: 100, marginTop: 40 }}></View>


                    <View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 28 }}>
                            <Icon3 name="air" size={55} color='white' />

                            <Text style={{ color: 'white', marginLeft: 22, fontSize: 20, marginRight: 22, marginTop: 14 }}>
                                _Wind_
                            </Text>
                            <Text style={{ color: '#787979',fontSize:18,marginTop:5 }}>{winds} km/hr</Text></View>
                        {/* <View style={{ backgroundColor: 'white', width: 2, height: 100,borderRadius:20,marginTop:40 }}></View> */}
                    </View>
                </View>
            </View></TouchableOpacity>
        </View>
    )
}

export default Boxes