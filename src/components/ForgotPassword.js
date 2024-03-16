import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = () => {
    if (!email.trim()) {
      setErrorMessage('*Note: Please enter your email');
    } else if (!validateEmail(email)) {
      setErrorMessage('*Note: Please enter a valid email address');
    } else {
      // Navigate to the VerifyScreen and pass the email as a parameter
      navigation.navigate('Verify', { email });
      setEmail('');
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <ImageBackground 
      source={require('../assets/images/forgot.jpg')}
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
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Send</Text>
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
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff', // Set background color to white to make it visible against the background
  },
  button: {
    width: '40%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 17,
    color: '#fff', // Adjust the text color to make it visible against the background
    textDecorationLine: 'underline',
    marginTop: 17
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 18,
    color: 'gold',
    marginBottom: 15,
  },
});

export default ForgotPassword;
