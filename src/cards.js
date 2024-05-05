import React from 'react';
import { Text, View, ImageBackground, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Cardss = ({ name, image }) => {
  const { height: deviceHeight, width: deviceWidth } = useWindowDimensions();
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object
  const search = () => {
    navigation.navigate('Details', { name: name }); // Navigate to 'Details' screen with city name
};

  return (
    <View style={styles.container}>
     <TouchableOpacity onPress={search}>
     <ImageBackground
        source={{ uri: image }}
        style={[styles.imageBackground, { height: deviceHeight / 5, width: deviceWidth / 2 - 50 }]}
      >
        <Text style={styles.text}>{name}</Text>
      </ImageBackground>
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'column',
  },
  imageBackground: {
    resizeMode: 'cover',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Cardss;
