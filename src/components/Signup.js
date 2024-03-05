import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  const handleSignup = () => {
    if (email && password && confirmPassword && name && position && uniqueId) {
      if (password === confirmPassword) {
        // Handle signup logic here, such as submitting user data to a server
        alert('Signup successful!');
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <ImageBackground 
      source={require('../assets/images/signup.jpg')} // Change the path to your background image
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <View style={styles.row}>
          {/* Input fields */}
          <View style={styles.column}>
            <TextInput
              style={styles.suinput}
              placeholder="Unique ID"
              value={uniqueId}
              onChangeText={setUniqueId}
            />
            <TextInput
              style={styles.suinput}
              placeholder="Position"
              value={position}
              onChangeText={setPosition}
            />
            <TextInput
              style={styles.suinput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.column}>
            <TextInput
              style={styles.suinput}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.suinput}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.suinput}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
        </View>
        {/* Signup button */}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        {/* Link to Login */}
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  column: {
    justifyContent: 'space-between',
    width: '48%', // Adjust width as needed
  },
  suinput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff', // Set background color to white to make it visible against the background
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
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
  },
});

export default Signup;
