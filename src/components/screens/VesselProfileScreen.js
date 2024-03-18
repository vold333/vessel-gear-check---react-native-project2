import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const VesselProfileScreen = () => {
  const [inputs, setInputs] = useState([
    { label: 'Captain Name', value: '' },
    { label: 'Name of the chief engineer', value: '' },
    { label: 'Name of the chief mate', value: '' },
    { label: 'Vessel ID', value: '' },
    { label: 'Vessel Name', value: '' },
    { label: 'Type and class', value: '' },
    { label: 'Country', value: '' }, // Change label to 'Country' for the 7th input
    { label: 'IMO Number', value: '' },
    { label: 'IMO Type', value: '' },
    { label: 'Registry Info', value: '' }, // Change labels for the 10th, 11th, and 12th inputs
    { label: 'Maintanence Schedule', value: '' },
    { label: 'Repair History', value: '' },
  ]);

  const handleInputChange = (text, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = text;
    setInputs(newInputs);
  };

  const handleFilePick = async (index) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log("DocumentPicker response:", res); // Debugging: Log the response object
      const newInputs = [...inputs];
      // Extract file name from URI if it exists
      const fileName = res?.name ? res.name : ''; // Use name property of the response object
      newInputs[index].value = fileName; // Store the file name in the input value
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
    // Handle back navigation
    console.log('Back button clicked');
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Submitted:', inputs);
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
              editable={index < 7} // Make only the first 7 inputs editable
            />
            {(index >= 9 && index <= 11) && ( // Render file upload button for inputs 10 to 12
              <TouchableOpacity onPress={() => handleFilePick(index)} style={styles.filePicker}>
                <Text style={styles.filePickerText}>Select PDF</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
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
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default VesselProfileScreen;
