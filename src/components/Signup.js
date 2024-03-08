import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Validation function for Name
  const validateName = (text) => {
    if (!text || !/^[a-zA-Z]{4,15}$/.test(text)) {
      setErrorMessage('*Note: Name must contain only alphabets and be between 4 to 15 characters');
    } else {
      setErrorMessage('');
    }
  };

  // Validation function for Email
  const validateEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!text || !emailRegex.test(text)) {
      setErrorMessage('*Note: Please enter a valid email address');
    } else {
      setErrorMessage('');
    }
  };

  // Validation function for Password
  const validatePassword = (text) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!text || !passwordRegex.test(text)) {
      setErrorMessage('*Note: The Password length should be of 8 to 16.\n The Password must contain at least one capital letter,\n small letter, numeric and a special character.');
    } else {
      setErrorMessage('');
    }
  };

  // Validation function for Confirm Password
  const validateConfirmPassword = (text) => {
    if (text !== password) {
      setErrorMessage('*Note: Passwords do not match. Make sure they do');
    } else {
      setErrorMessage('');
    }
  };

  // Validation function for Unique ID
  const validateUniqueId = (text) => {
    if (!text || !/^\d{6}$/.test(text)) {
      setErrorMessage('*Note: Unique ID must be exactly 6 numbers');
    } else {
      setErrorMessage('');
    }
  };

  const handleSignup = () => {
    // Check if any required field is empty
    if (!email || !password || !confirmPassword || !name || !position || !uniqueId) {
      setErrorMessage('Please fill in all the fields');
      setSuccessMessage('');
      return;
    }

    // Your signup logic goes here...
    setSuccessMessage('Signup Successful!');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setEmail('');
    setUniqueId('');
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground 
      source={require('../assets/images/signup.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextInput
              style={styles.suinput}
              placeholder="Unique ID"
              keyboardType="numeric"
              maxLength={6}
              value={uniqueId}
              onChangeText={(text) => {
                setUniqueId(text);
                validateUniqueId(text);
              }}
              onBlur={() => validateUniqueId(uniqueId)}
            />
            <TextInput
              style={styles.suinput}
              placeholder="Position"
              value={position}
              maxLength={20}
              onChangeText={setPosition}
            />
            <TextInput
              style={styles.suinput}
              placeholder="Password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                validatePassword(text);
              }}
              autoCapitalize="none"
              onBlur={() => validatePassword(password)}
            />
          </View>
          <View style={styles.column}>
            <TextInput
              style={styles.suinput}
              placeholder="Name"
              value={name}
              onChangeText={(text) => {
                setName(text);
                validateName(text);
              }}
              onBlur={() => validateName(name)}
            />
            <TextInput
              style={styles.suinput}
              placeholder="Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                validateEmail(text);
              }}
              autoCapitalize="none"
              onBlur={() => validateEmail(email)}
            />
            <TextInput
              style={styles.suinput}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                validateConfirmPassword(text);
              }}
              secureTextEntry={true}
              autoCapitalize="none"
              onBlur={() => validateConfirmPassword(confirmPassword)}
            />
          </View>
        </View>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
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
    resizeMode: 'cover',
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  column: {
    justifyContent: 'space-between',
    width: '48%',
  },
  suinput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '40%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  errorMessage: {
    fontSize: 16,
    color: 'gold',
    marginBottom: 15,
  },
  successMessage:{
    fontSize: 18,
    color:'yellow',
    marginBottom: 10,
    fontWeight: 'bold'
  }
});

export default Signup;
