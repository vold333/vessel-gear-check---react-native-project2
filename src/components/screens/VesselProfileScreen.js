import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, PermissionsAndroid } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

const VesselProfileScreen = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [inputs, setInputs] = useState([
    { label: 'Captain Name', value: '', maxLength: 20 },
    { label: 'Name of the chief engineer', value: '', maxLength: 20 },
    { label: 'Name of the chief mate', value: '', maxLength: 20 },
    { label: 'Vessel ID', value: '', maxLength: 20 },
    { label: 'Vessel Name', value: '', maxLength: 20 },
    { label: 'Type and Class', value: '', maxLength: 20 },
    { label: 'Country', value: '', maxLength: 20 },
    { label: 'IMO Number', value: '', maxLength: 7, keyboardType: 'numeric' },
    { label: 'IMO Type', value: '', maxLength: 20 },
    { label: 'Registry Info', value: '', maxLength: 20 },
    { label: 'Maintenance Schedule', value: '', maxLength: 20 },
    { label: 'Repair History', value: '', maxLength: 20 },
  ]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    requestExternalStoragePermission();
  }, []);

  const requestExternalStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to upload files.',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('External storage permission granted');
        setPermissionGranted(true);
      } else {
        console.log('External storage permission denied');
        setPermissionGranted(false);
      }
    } catch (error) {
      console.error('Error requesting external storage permission:', error);
    }
  };

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
      setSelectedFile(res);
      // Update the input field with the selected file name
      const newInputs = [...inputs];
      newInputs[index].value = res.name;
      setInputs(newInputs);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log('File selection cancelled');
      } else {
        console.error('Error while picking the file:', err);
      }
    }
  };    

  const handleBack = () => {
    setInputs(inputs.map(input => ({ ...input, value: '' })));
    setSelectedFile(null);
  };

  const handleSubmit = async () => {
    const allFieldsFilled = inputs.every(input => input.value.trim() !== '');

    if (allFieldsFilled) {
      setErrorMessage('');

      if (selectedFile) {
        console.log('Selected File:', selectedFile);

        try {
          const dirPath = RNFS.DocumentDirectoryPath;
          const folderName = 'uploads';
          const filePath = `${dirPath}/${folderName}/${selectedFile.name}`;

          await RNFS.mkdir(`${dirPath}/${folderName}`);
          await RNFS.copyFile(selectedFile.uri, filePath);

          console.log('File copied to destination folder:', filePath);
        } catch (error) {
          console.error('Error copying file to destination folder:', error);
        }

        setSelectedFile(null);
      }

      console.log('Submitted:', inputs);
      setInputs(inputs.map(input => ({ ...input, value: '' })));
    } else {
      setErrorMessage('*Please fill all required fields.');
    }
  };

  return (
    <ImageBackground source={require('../../assets/images/vessel.jpg')} style={styles.backgroundImage}>
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
                keyboardType={input.keyboardType || 'default'}
                editable={index < 9}
              />
              {(index >= 9 && index <= 11) && permissionGranted && (
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
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingTop: 5,
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
    backgroundColor: 'lightblue',
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

