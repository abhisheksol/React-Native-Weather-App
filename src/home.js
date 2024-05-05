import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Cardss from './cards';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Boxes from './boxes';
import Box2 from './box2';
import LinearGradient from 'react-native-linear-gradient';
function Home(props) {
    const { name_city } = props.route.params || { name_city: 'solapur' };

    // console.warn({ name_city });

    const [city, setCity] = useState('');
    const [name, setName] = useState("solapur");
    const navigation = useNavigation();
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        setName(name_city);
    }, [name_city]);

    const getDayAndTime = (localtime) => {
        const date = new Date(localtime);
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const day = days[date.getDay()];
        const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        const ampm = date.getHours() >= 12 ? 'pm' : 'am';
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        return `${day}, ${hours}:${minutes} ${ampm}`;
    };



    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4876b68640b2478ebdb190846240205&q=${name}&aqi=no`);
                const data = await response.json();
                setWeatherData(data);
                // console.warn(data.current.condition.text);

            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [name]);

    const cities = [
        {
            "city_name": "London",
            "image": "https://c4.wallpaperflare.com/wallpaper/806/205/136/london-4k-pic-wallpaper-preview.jpg"
        },
        {
            "city_name": "Mumbai",
            "image": "https://img.freepik.com/premium-photo/high-view-bangkok-thailand_69709-1487.jpg?size=626&ext=jpg"
        },
        {
            "city_name": "New Delhi",
            "image": "https://w0.peakpx.com/wallpaper/482/713/HD-wallpaper-bahai-lotus-temple-new-delhi-india-temple-delhi-lotus-new-india-bahai.jpg"
        },
        {
            "city_name": "Pune",
            "image": "https://c0.wallpaperflare.com/preview/714/294/483/city-pune-sky-india.jpg"
        },
        {
            "city_name": "Tokyo",
            "image": "https://c4.wallpaperflare.com/wallpaper/114/381/231/photography-cityscape-city-urban-wallpaper-preview.jpg"
        },
        {
            "city_name": "new York",
            "image": "https://media.nomadicmatt.com/2022/newnycguidemain.jpeg"
        },
        {
            "city_name": "Paris",
            "image": "https://images7.alphacoders.com/879/thumb-1920-879477.jpg"
        },
        {
            "city_name": "Solapur",
            "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQya7yZJqVaA3FdERKmEPb642cW6_9UnT2HgnKItVmVAHfwpZkCpo65vfoZ_C-8XyOUIAn4Yi-C68FKEMqTu2MHbWGcJUFgABNtG4a8vA"
        },
        // Add more cities here
        {
            "city_name": "Sydney",
            "image": "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Oceania/Australia/Sydney/sydney-GettyImages-1066998508.jpg?imwidth=960"
        },
        {
            "city_name": "Los Angeles",
            "image": "https://ktla.com/wp-content/uploads/sites/4/2022/12/GettyImages-1346202245.jpg?w=960&h=540&crop=1"
        },
        {
            "city_name": "Rio de Janeiro",
            "image": "https://www.qantas.com/content/dam/qantas/destinations/south-america/cityscape-rio-brazil.jpg/jcr:content/renditions/hero.desktop.jpg"
        },
        {
            "city_name": "Rome",
            "image": "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp"
        },
        {
            "city_name": "Singapore",
            "image": "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2024/01/13/4e8fc2c3-d4e6-438e-bdb3-0f731e7afd7a_9480ba2b.jpg?itok=xnBBHe05&v=1705148306"
        },
        {
            "city_name": "Dubai",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dubai_Skyline_mit_Burj_Khalifa_%28cropped%29.jpg/1920px-Dubai_Skyline_mit_Burj_Khalifa_%28cropped%29.jpg"
        }
    ];
    

    const search = () => {
        navigation.navigate('Details', { name: city }); // Navigate to 'Details' screen with city name
    };

    return (
        <LinearGradient colors={['#0F2027', '#203A43', '#2C5364']} style={{ flex: 1 }}>
        <View>
            <ScrollView>
                <View
                  
                    style={{ width: '100%', height: '100%' }}
                   >

                    <View style={{ position: 'absolute', paddingVertical: 20, paddingHorizontal: 20, marginTop: 35 }}>
                        <View style={{}}>
                            <Icon name="menu" size={46} color='white' />
                        </View>

                        {/* temperature -------------------------------------------- */}

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 55, color: 'white', marginTop: 65, width: 300 }}>
                                {weatherData ? `${parseInt(weatherData.current.temp_c)}°` : 'Loading...'}
                            </Text>
                            {weatherData && (
                                weatherData.current.is_day ?
                                    <Icon name="sunny" size={70} color='yellow' style={{ marginLeft: 5 }} /> : <Icon name="moon" size={70} color='white' style={{ marginLeft: 5 }} />
                            )}
                        </View>

                        {/* Location --------------------------------------------------- */}

                        <TouchableOpacity onPress={() => navigation.navigate('Change_Location', { name: city })}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 22, color: 'white', fontWeight: "bold" }}>
                                    {weatherData ? `${weatherData.location.name}, ${weatherData.location.region}` : 'Loading...'}
                                </Text>
                                <Icon name="location-sharp" size={36} color='white' style={{}} />
                            </View>
                        </TouchableOpacity>

                        <View style={{ marginTop: 10, }}>
                            <Text style={{ fontSize: 18, color: 'white', fontWeight: '' }}>
                                Feels like {weatherData ? `${parseInt(weatherData.current.feelslike_c)}°` : ''}
                            </Text>
                        </View>
                        <View style={{ marginTop: 1, }}>
                            <Text style={{ fontSize: 18, color: 'white', fontStyle: 'italic' }}>
                                {weatherData ? getDayAndTime(weatherData.location.localtime) : ''}
                            </Text>
                        </View>



                    </View>
                    <View style={{ paddingHorizontal: 15 }}>
                        <View style={{
                            justifyContent: 'space-between',
                            alignItems: 'center',

                            flexDirection: 'row',
                            borderRadius: 50,
                            borderWidth: 2,
                            borderColor: "white",
                            paddingHorizontal: 20,
                            marginTop: 390,
                            width: '90%'
                        }}>
                            <TextInput
                                placeholder='Search City'
                                placeholderTextColor='white'
                                onChangeText={(text) => setCity(text)}
                                style={{
                                    paddingHorizontal: 10, fontSize: 16, color: 'white', height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            />
                            <TouchableOpacity onPress={search}>
                                <Icon name="search" size={22} color="white" />
                            </TouchableOpacity>
                        </View>
                        {/* <Boxes uv={55} humidity={45} wind={45}/> */}

                        {
                            weatherData ? <Boxes uv={weatherData.current.uv} humidity={weatherData.current.humidity} wind={weatherData.current.wind_kph} /> : null

                        }

                        <Box2 />

                    </View>
                    <Text style={{ fontSize: 22, color: 'white', paddingHorizontal: 20, marginTop: 220, marginBottom: 20 }}>Global Weather Highlights</Text>

                    <FlatList
                        horizontal
                        data={cities}
                        renderItem={({ item }) => (
                            <Cardss name={item.city_name} image={item.image} />
                        )}
                    />
                </View>
            </ScrollView>
        </View>
        </LinearGradient>
    );
}

export default Home;
