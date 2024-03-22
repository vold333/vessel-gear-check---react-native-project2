import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob'; // Make sure this is installed

const PdfTry = () => {
  const [fileName, setFileName] = useState('');

  const selectPdf = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      const firstFile = Array.isArray(res) ? res[0] : res;
       // Log the firstFile object
    console.log('First picked file:', firstFile);
    
      // Using copyFileToExternalStorage function for Android
      if (Platform.OS === 'android') {
        await copyFileToExternalStorage(firstFile.uri, firstFile.name);
      } else {
        // For iOS or other platforms, you might want to handle differently
        console.log('Non-Android OS detected');
      }
      setFileName(firstFile.name); // Displaying the file name as a confirmation
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        console.error(err);
      }
    }
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
    const folderPath = `${dirs.DownloadDir}/ShipUploadedPDFs`; // Define the folder path
    const filePath = `${folderPath}/${name}`; // Define the full file path
  
    try {
      // Check if the folder exists, if not, create it
      const isDir = await RNFetchBlob.fs.isDir(folderPath);
      if (!isDir) {
        await RNFetchBlob.fs.mkdir(folderPath);
      }
  
      // Copy the file to the specified folder in external storage
      await RNFetchBlob.fs.cp(uri, filePath);
      console.log(`File copied to: ${filePath}`);
    } catch (error) {
      console.error('Error copying file:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Button title="Select PDF" onPress={selectPdf} />
      {fileName ? <Text>Uploaded: {fileName}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default PdfTry;
