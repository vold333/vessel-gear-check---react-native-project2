import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
 // Ensure you have this component properly adapted for React Native
import { ChecklistMain } from './ChecklistScreen';
import imageUrl from './i1.png'; // Make sure to import your image correctly for React Native
import LinearGradient from 'react-native-linear-gradient';

// Define your buttons array as before
const createChecklistButtons = [
  { text: "New Checklist", path: "NewChecklist" }, // Adjust paths for React Navigation
  { text: "Modify Default", path: "ModifyDefaultChecklist" },
  { text: "Back", path: "Home", style: { backgroundColor: 'blue', color: 'white' } }, // Adjust style as needed
];

const CreateChecklistPage = () => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
      style={styles.fullScreenGradient}
    >
    <ScrollView contentContainerStyle={styles.container}>
      
      <ChecklistMain
        content={
          <View style={styles.imageContainer}>
            <Image source={imageUrl} style={styles.image} />
          </View>
        }
        buttons={createChecklistButtons}
      />
    </ScrollView></LinearGradient>
  );
};

const styles = StyleSheet.create({
  fullScreenGradient: {
    flex: 1,  
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    width: '100%',
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Example background color for the title container
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageContainer: {
    width: 350,
    height: 290,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adjust according to your preference
  },
});

export default CreateChecklistPage;
