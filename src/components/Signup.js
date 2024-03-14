import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'; // Import the icon library

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [otherPosition, setOtherPosition] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility

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

  const handleSelectPosition = (selectedPosition) => {
    if (selectedPosition === 'Other') {
      setIsModalVisible(false); // Close the modal
      setPosition('Other');
      setOtherPosition('');
    } else {
      setPosition(selectedPosition);
      setOtherPosition('');
      setIsModalVisible(false); // Close the modal
    }
  };

  const handleSignup = () => {
    let isValid = true;

    // Check if any required field is empty
    if (!email || !password || !confirmPassword || !name || !uniqueId) {
      setErrorMessage('Please fill in all the fields');
      setSuccessMessage('');
      isValid = false;
      return; // Stop the signup process
    } else {
      setErrorMessage('');
    }

    // Check if position is not selected or 'Other' is selected but other position is empty
    if ((position.trim() === '' || position === 'Other') && otherPosition.trim() === '') {
      setErrorMessage('*Position is required');
      isValid = false;
    } else {
      setErrorMessage('');
    }

    // If any required field is empty or position is not selected, stop the signup process
    if (!isValid) {
      return;
    }

    // Your signup logic goes here...
    setSuccessMessage('Signup Successful!');
    setPosition('');
    setOtherPosition('');
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
            <TouchableOpacity
              style={styles.modalinput}
              onPress={() => setIsModalVisible(true)} // Open modal when clicked
            >
              <Text style={[styles.modalOptionText, position === 'Other' && { color: 'black' }]}>
                {position ? (position === 'Other' ? `${otherPosition || '*Click to Specify'}` : position) : 'Select Position'}
              </Text>
            </TouchableOpacity>
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
        {/* Modal for selecting position */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSelectPosition('Captain')}
            >
              <Text style={styles.modalOptionText}>Captain</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSelectPosition('Bridge')}
            >
              <Text style={styles.modalOptionText}>Bridge</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSelectPosition('Engine')}
            >
              <Text style={styles.modalOptionText}>Engine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSelectPosition('Logistics')}
            >
              <Text style={styles.modalOptionText}>Logistics</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSelectPosition('Safety')}
            >
              <Text style={styles.modalOptionText}>Safety</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSelectPosition('Hospitality')}
            >
              <Text style={styles.modalOptionText}>Hospitality</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSelectPosition('Other')}
            >
              <Text style={styles.modalOptionText}>Other</Text>
            </TouchableOpacity>
            {position === 'Other' && (
              <View style={styles.otherInputContainer}>
                <TextInput
                  style={styles.otherInput}
                  placeholder="Specify Position"
                  value={otherPosition}
                  onChangeText={text => setOtherPosition(text)}
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Icon name="check" size={20} color="black" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    
  },
  modalOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'black',
  },
  modalOptionText:{
    color:'black'
  },
  iconContainer: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 9,
    alignItems:'center'
  },
  modalinput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#fff', // White background for input fields
    color: "black",
    paddingTop: 15,
  },
});

export default Signup;
