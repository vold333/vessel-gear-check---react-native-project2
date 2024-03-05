import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const ForgotPassword = ({ navigation }) => { // Accept navigation prop here
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email) {
      // Implement your logic to handle resetting the password
      // This could involve sending a reset link to the provided email
      // You can replace the alert with your logic
      alert('Password reset instructions sent to your email');
    } else {
      alert('Please enter your email');
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login'); // Use navigation prop here
  };

  return (
    <ImageBackground 
      source={require('../assets/images/forgot.jpg')} // Change the path to your background image
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <TextInput
          style={styles.fpinput}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.linkText}>Back to Login ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // You can adjust the opacity here
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Adjust the text color to make it visible against the background
  },
  fpinput: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff', // Set background color to white to make it visible against the background
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 16,
    color: '#fff', // Adjust the text color to make it visible against the background
    textDecorationLine: 'underline',
    marginTop: 17
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ForgotPassword;
