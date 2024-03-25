// SettingsScreen.js

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SettingsScreen(props) {
  const navigation = useNavigation();

  const handlePersonalizationPress = () => {
    navigation.navigate('Personalization');
  };

  return (
    <View style={styles.container}>
      <View style={styles.middleContainer}>
        <ImageBackground
          source={require('../../assets/images/vessel.jpg')}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <TouchableOpacity style={styles.personalizationButton} onPress={handlePersonalizationPress}>
              <Text style={styles.personalizationButtonText}>Personalization</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Optional: Set background color of the main container
  },
  middleContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end', // Align the button to the bottom of the container
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', // Adjust opacity as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  personalizationButton: {
    borderRadius: 25,
    backgroundColor: '#4539FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  personalizationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
});

export default SettingsScreen;