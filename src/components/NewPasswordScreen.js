import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordRegex.test(newPassword)) {
      setErrorMessage('*Note: The Password must be in the length range of 8 to 16. The Password must contain at least one capital letter,\n small letter, numeric and a special character.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please make sure your passwords match.');
      return;
    }

    setErrorMessage('');
    setNewPassword('');
    setConfirmPassword('');
    // Your logic to handle password change goes here
    setSuccessMessage('Password changed successfully!')
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground 
      source={require('../assets/images/forgot.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          value={newPassword}
          onChangeText={setNewPassword}
          onBlur={() => {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
            if (!passwordRegex.test(newPassword)) {
              setErrorMessage('*Note: The Password must be in the length range of 8 to 16. \n The Password must contain at least one capital letter,\n small letter, numeric and a special character.');
            } else {
              setErrorMessage('');
            }
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          onBlur={() => {
            if (newPassword !== confirmPassword) {
              setErrorMessage('Passwords do not match. Please make sure your passwords match.');
            } else {
              setErrorMessage('');
            }
          }}
        />

        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
        <TouchableOpacity onPress={handleBack} style={styles.backButtonContainer}>
          <Icon name="arrow-left" size={20} color="white" />
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '40%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  backButton: {
    fontSize: 18,
    color: '#007bff',
    color: '#fff',
    marginLeft: 5,
    
  },
  errorMessage: {
    fontSize: 14,
    color: 'gold',
    marginBottom: 10,
    textAlign: 'center',
  },
  successMessage:{
    fontSize: 18,
    color:'yellow',
    marginBottom: 10,
    fontWeight: 'bold'
  }
});

export default NewPasswordScreen;
