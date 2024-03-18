import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardType } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const VesselProfileScreen = () => {
  const initialInputs = [
    { label: 'Captain Name', value: '', maxLength: 20 },
    { label: 'Name of the chief engineer', value: '', maxLength: 20 },
    { label: 'Name of the chief mate', value: '', maxLength: 20 },
    { label: 'Vessel ID', value: '', maxLength: 20 },
    { label: 'Vessel Name', value: '', maxLength: 20 },
    { label: 'Type and Class', value: '', maxLength: 20 },
    { label: 'Country', value: '', maxLength: 20 },
    { label: 'IMO Number', value: '', maxLength: 7, keyboardType: 'numeric' }, // Enforce numeric keyboard for IMO Number
    { label: 'IMO Type', value: '', maxLength: 20 },
    { label: 'Registry Info', value: '', maxLength: 20 },
    { label: 'Maintenance Schedule', value: '', maxLength: 20 },
    { label: 'Repair History', value: '', maxLength: 20 },
  ];

  const [inputs, setInputs] = useState(initialInputs);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (text, index) => {
    if (inputs[index].maxLength && text.length > inputs[index].maxLength) {
      return; // Do not update the value if it exceeds max length
    }
    const newInputs = [...inputs];
    newInputs[index].value = text;
    setInputs(newInputs);
  };

  const handleFilePick = async (index) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      const newInputs = [...inputs];
      const fileName = res?.name ? res.name : '';
      newInputs[index].value = fileName;
      setInputs(newInputs);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        console.log('Error while picking the file:', err);
      }
    }
  };

  const handleBack = () => {
    setInputs(initialInputs);
  };

  const handleSubmit = () => {
    const allFieldsFilled = inputs.every(input => input.value.trim() !== '');

    if (allFieldsFilled) {
      setErrorMessage('');
      console.log('Submitted:', inputs);
      setInputs(initialInputs);
    } else {
      setErrorMessage('*Please fill all required fields.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {inputs.map((input, index) => (
          <View key={index} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={input.value}
              onChangeText={(text) => handleInputChange(text, index)}
              placeholder={input.label}
              maxLength={input.maxLength}
              keyboardType={input.keyboardType || 'default'} // Default to 'default' if keyboardType is not provided
              editable={index < 9}
            />
            {(index >= 9 && index <= 11) && (
              <TouchableOpacity onPress={() => handleFilePick(index)} style={styles.filePicker}>
                <Text style={styles.filePickerText}>Select PDF</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBack} style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  filePicker: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  filePickerText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10
  },
});

export default VesselProfileScreen;
