// PersonalizationScreen.js

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto'; // Import the icon library

function PersonalizationScreen(props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [otherPosition, setOtherPosition] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]{4,15}$/;
    return nameRegex.test(name);
  };

  const handleUpdatePress = () => {
    let isValid = true;
  
    // Check if any of the input fields are empty
    if (email.trim() === '') {
      setEmailError('*Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('*Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }
  
    if (name.trim() === '') {
      setNameError('*Name is required');
      isValid = false;
    } else if (!validateName(name)) {
      setNameError('*Name should only contain alphabets and be 4-15 characters long');
      isValid = false;
    } else {
      setNameError('');
    }
  
    if ((position.trim() === '' || position === 'Other') && otherPosition.trim() === '') {
      setPosition('*Position is required');
      isValid = false;
    } else {
      setPosition('');
    }
  
    if (!isValid) {
      // If any field is empty or invalid, do not proceed with the update
      console.log('Please fill in all the fields correctly');
      return;
    }
  
    // Implement your update logic here
    console.log('Update button pressed');
    
    // Clear the input fields after submission
    setEmail('');
    setName('');
    setPosition('');
    setOtherPosition('');
    setEmailError('');
    setNameError('');
  };
  

  const handleCancelPress = () => {
    // Navigate back to the SettingsScreen
    navigation.goBack();
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

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/sailor.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              onBlur={() => {
                const isValidEmail = validateEmail(email);
                setEmailError(isValidEmail ? '' : '*Invalid email format');
              }}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              maxLength={15}
              onChangeText={text => setName(text)}
              onBlur={() => {
                const isValidName = validateName(name);
                setNameError(isValidName ? '' : '*Name should only contain alphabets and be at least 4 characters long');
              }}
            />
            {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
            <TouchableOpacity
              style={styles.input}
              onPress={() => setIsModalVisible(true)} // Open modal when clicked
            >
              <Text style={styles.modalOptionText}>{position ? (position === 'Other' ? `Other: ${otherPosition || 'Click again to Specify'}` : position) : 'Select Position'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.updatebutton} onPress={handleUpdatePress}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelbutton} onPress={handleCancelPress}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#fff', // White background for input fields
    color: "black",
  },
  otherInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  otherInput: {
    flex: 1,
    marginRight: 10,
  },
  iconContainer: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 9,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  updatebutton: {
    backgroundColor: '#E1AFEF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelbutton: {
    backgroundColor: '#E1AFEF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  errorText: {
    color: 'gold',
    marginBottom: 5,
    fontWeight:'bold',
    fontSize:15
  },
  // Styles for modal
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
  }
});

export default PersonalizationScreen;
