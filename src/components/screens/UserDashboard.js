
import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';

export default UserDashboard = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/userhome.jpg')}
      style={styles.backgroundImage}
    >
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  text: {
    // Additional styling for the text if needed
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Example text color
    textAlign: 'center',
  },
});


