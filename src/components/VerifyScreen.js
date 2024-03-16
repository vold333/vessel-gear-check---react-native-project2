import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const VerifyScreen = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChangeText = (index, value) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);

    if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyPress = (index, event) => {
    if (event.nativeEvent.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index - 1] = '';
      setVerificationCode(newVerificationCode);
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = () => {
    const code = verificationCode.join('');
    if (code.trim() !== '') {
      navigation.navigate('NewPassword');
    } else {
      alert('Please enter verification code.');
    }
  };

  const handleResendCode = () => {
    alert('Resending verification code...');
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
        <Text style={styles.title}>Verification</Text>
        <View style={styles.inputContainer}>
          {verificationCode.map((value, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.inputBox}
              maxLength={1}
              keyboardType="numeric"
              value={value}
              onChangeText={(text) => handleChangeText(index, text)}
              onKeyPress={(event) => handleKeyPress(index, event)}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.resendText}>If you didn't receive code? Resend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBack}>
          <View style={styles.backButton}>
            <Icon name="arrow-left" size={20} color="white" />
            <Text style={styles.backButtonText}>Back</Text>
          </View>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  inputBox: {
    width: '20%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  resendText: {
    fontSize: 17,
    color: '#007bff',
    textDecorationLine: 'underline',
    marginBottom: 23,
    // eslint-disable-next-line no-dupe-keys
    color: '#fff',
    marginTop: 8, 
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 5,
  },
});

export default VerifyScreen;
