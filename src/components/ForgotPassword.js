// ForgotPassword.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
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
    color: '#007bff',
    textDecorationLine: 'underline',
    marginRight: 10,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17
  },
});

export default ForgotPassword;
