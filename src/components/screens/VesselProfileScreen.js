/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, PermissionsAndroid, Platform } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import RNHTMLtoPDF from 'react-native-html-to-pdf'; // Import react-native-html-to-pdf


const VesselProfileScreen = () => {
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
  const [fileName, setFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (text, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = text;
    setInputs(newInputs);
  };

  const selectPdf = async (index) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      const firstFile = Array.isArray(res) ? res[0] : res;

      if (Platform.OS === 'android') {
        await copyFileToExternalStorage(firstFile.uri, firstFile.name);
      } else {
        console.log('Non-Android OS detected');
      }

      // Update the input field with the selected file name
      const newInputs = [...inputs];
      newInputs[index].value = firstFile.name;
      setInputs(newInputs);
      setFileName(firstFile.name);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        console.error(err);
      }
    }
  };

  const handleReport = async () => {
    try {
      const options = {
        html: generateHTMLReport(), // Generate HTML for the report
        fileName: 'Vessel_Report', // Set the file name
        directory: 'Documents', // Save in Documents directory (or use other directories as per requirement)
      };

      const pdf = await RNHTMLtoPDF.convert(options); // Convert HTML to PDF

      console.log('PDF generated:', pdf);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const generateHTMLReport = () => {
    // Define the HTML with style for the table and other elements
    let html = `
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 24px; }
          h1 { color: navy; text-align: center; }
          .report-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          .report-table th, .report-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          .report-table th { background-color: #8C8CFF; color: white; }
          .container { padding: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Vessel Report</h1>
          <table class="report-table">
            <thead>
              <tr>
                <th>Label</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
    `;
  
    // Iterate over each input field and add rows to the table
    inputs.forEach(input => {
      html += `
              <tr>
                <td>${input.label}</td>
                <td>${input.value}</td>
              </tr>
      `;
    });
  
    // Close the table, container div, and body/html tags
    html += `
            </tbody>
          </table>
        </div>
      </body>
      </html>
    `;
  
    return html;
  };
  
  

  const requestExternalStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "External Storage Permission",
          message: "App needs access to your external storage to download PDFs",
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const copyFileToExternalStorage = async (uri, name) => {
    if (!(await requestExternalStoragePermission())) {
      console.error("External storage permission denied");
      return;
    }
  
    const dirs = RNFetchBlob.fs.dirs;
    const folderPath = `${dirs.DownloadDir}/ShipUploadedPDFs`;
const filePath = `${folderPath}/${name}`;

  
    try {
      const isDir = await RNFetchBlob.fs.isDir(folderPath);
      if (!isDir) {
        await RNFetchBlob.fs.mkdir(folderPath);
      }
      await RNFetchBlob.fs.cp(uri, filePath);
      console.log(`File copied to: ${filePath}`);

    } catch (error) {
      console.error('Error copying file:', error);
    }
  };

  const handleBack = () => {
    setInputs(inputs.map(input => ({ ...input, value: '' })));
    setFileName('');
  };

  // Inside your component function
useEffect(() => {
  let timer;
  if (successMessage) {
    timer = setTimeout(() => {
      setSuccessMessage('');
    }, 10000); // 10 seconds
  }

  return () => clearTimeout(timer);
}, [successMessage]); // Run this effect whenever successMessage changes

// Inside your handleSubmit function
const handleSubmit = async () => {
  // Check if all fields are filled
  const allFieldsFilled = inputs.every(input => input.value.trim() !== '');

  if (allFieldsFilled) {
    setSuccessMessage('Submitted successfully!!!'); // Update errorMessage state with success message
    console.log('Submitted:', inputs); // Log the submitted data
    setInputs(inputs.map(input => ({ ...input, value: '' }))); // Clear input values
    setFileName(''); // Clear file name
  } else {
    setErrorMessage('*Please fill all the required fields.'); // Display error message
  }
};  

  return (
    <ImageBackground source={require('../../assets/images/vessel.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {inputs.map((input, index) => (
            <View key={index} style={styles.inputContainer}>
              <TextInput
                style={[styles.input, index >= 9 && index <= 11 ? styles.inputWithFile : null]}
                value={input.value}
                onChangeText={(text) => handleInputChange(text, index)}
                placeholder={input.label}
                maxLength={index >= 9 && index <= 11 ? undefined : input.maxLength}
                keyboardType={input.keyboardType || 'default'}
                editable={index < 9}
              />
              {(index >= 9 && index <= 11) && (
                <TouchableOpacity onPress={() => selectPdf(index)} style={styles.filePicker}>
                  <Text style={styles.filePickerText}>Select PDF</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
          {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
          {fileName ? <Text style={styles.uploadText}>Uploaded: <Text style={styles.uploadText}>{fileName}</Text></Text> : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReport} style={styles.reportButton}>
          <Text style={styles.reportButtonText}>Report</Text>
        </TouchableOpacity>
            <TouchableOpacity onPress={handleBack} style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
          {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
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
  inputWithFile: {
    width: '80%', // Adjust the width for
    color: 'black', // Set text color to black
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
  marginBottom: 10
  },
  buttonText: {
  color: '#FFFFFF',
  fontWeight: 'bold',
  },
  errorMessage: {
  color: 'red',
  marginBottom: 10
  },
  successMessage:{
  color: '#F5F12C',
  marginBottom: 15,
  fontWeight:'bold',
  fontSize: 18
  },
  uploadText:{
  marginBottom: 10,
  color: 'blue',
  textShadowRadius: 5,
  },
  fileNameText: {
  color: 'black',
  },
  reportButton: {
    position: 'absolute',
    top: 10, // Adjust as needed to position the button
    left:120,
    marginBottom:20,// Adjust as needed to position the button
    backgroundColor: '#FF0000', // Red color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  reportButtonText: {
    color: '#FFFFFF', // White color for text
    fontWeight: 'bold',
  },

});

export default VesselProfileScreen;