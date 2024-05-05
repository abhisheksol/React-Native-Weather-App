import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Change the import statement
import Entypo from 'react-native-vector-icons/Entypo'; // Change the import statement
import Icon2 from 'react-native-vector-icons/Fontisto';

function Details(props) {
    const { name } = props.route.params;
    const [weatherData, setWeatherData] = useState(null);
    const [condition, setcondition] = useState("")
    const [image, setimage] = useState('')

    useEffect(() => {
        switch (condition) {
            case "Sunny":
                setimage('https://www.weather2travel.com/images_blog/sunshine-hours-where-and-when-is-it-sunniest.jpg')
                break;
            case "Clear":
                setimage('https://www.weather2travel.com/images_blog/sunshine-hours-where-and-when-is-it-sunniest.jpg')
                break;
            case "Mist":
                setimage('https://3.bp.blogspot.com/-XR3AIn_-L_g/VcKSYItMklI/AAAAAAAAoM0/H1Hi04UueKU/s1600/London%2BFog%2Bpic.jpg')
                break;
            case "Overcast":
                setimage('https://img.freepik.com/free-photo/road-surrounded-by-field-covered-greenery-dark-cloudy-sky_181624-10302.jpg?w=1060&t=st=1714747281~exp=1714747881~hmac=a4149d41ec9d449690626105592bf5d38e525aaa109d14464cab4884f4da492e')
                break;
            case "Partly cloudy":
                setimage('https://images.wallpapersden.com/image/wxl-manhattan-cloudy-skyscraper_62891.jpg')
                break;
            case "Light rain":
                setimage('https://myrepublica.nagariknetwork.com/uploads/media/rain_20210802140558.jpg')
                break;
            default:
                setimage('https://c02.purpledshub.com/uploads/sites/41/2023/11/Yakutsk.jpg?w=750&webp=1')

        }

    }, [condition])

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4876b68640b2478ebdb190846240205&q=${name}&aqi=no`);
                const data = await response.json();
                setWeatherData(data);
                // console.warn(data.current.condition.text);
                setcondition(data.current.condition.text);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [name]);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={{ uri: image }}
                resizeMode="cover"
                style={{ flex: 1 }}
                imageStyle={{ opacity: 0.6, backgroundColor: 'black' }}
            >



                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 50 }}>

                    <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', marginBottom: 20 }}>
                        Weather Details for {name}
                    </Text>
                    {weatherData && (
                        <View style={{ alignItems: 'center'}}>

                            <View style={{backgroundColor:'rgba(0, 0, 0, 0.5)',borderRadius:10}}>
                            <Text style={{ fontSize: 20, color: 'white', marginBottom: 10 ,paddingHorizontal:35,marginTop:24}}>
                                <Icon name="thermometer" size={24} color="white" /> Temperature: {weatherData.current.temp_c}°C
                            </Text>
                            <Text style={{ fontSize: 20, color: 'white', marginBottom: 10 ,paddingHorizontal:35 }}>
                                <Icon name="cloud" size={24} color="white" /> Condition: {weatherData.current.condition.text}
                            </Text>
                            <Text style={{ fontSize: 20, color: 'white', marginBottom: 10, marginBottom: 24 ,paddingHorizontal:35 }}>
                                <Entypo name="air" size={24} color="white" /> Wind Speed: {weatherData.current.wind_kph} km/h
                            </Text>
                            </View>

                            <Text style={{ fontSize: 20, color: 'white', marginBottom: 10,marginTop:20 }}>
                                <Icon name="sun-o" size={24} color="violet" /> UV: {weatherData.current.uv} 
                            </Text>

                            <Text style={{ fontSize: 20, color: 'white', marginBottom: 10 }}>
                            <Icon2 name="blood-drop" size={24} color='#8ED1FF' /> Humidity: {weatherData.current.humidity} 
                            </Text>
                            {/* Add more weather data here as needed */}
                        </View>
                    )}
                </View>
            </ImageBackground>
        </View>
    );
}

export default Details;
