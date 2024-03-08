import React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

//import i1Image from '../assets/images/i1.png';


// Define the reusable button component with props for the button text and navigation
export function ReusableButton({ buttonText, to, style, onClick }) {
  const navigation = useNavigation();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Execute custom logic if onClick is provided
    } else if (to) {
      navigation.navigate(to); // Programmatically navigate if `to` prop is provided
    }
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handleClick}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

// ChecklistMain function converted to React Native
export function ChecklistMain({ content, buttons = [], additionalContent, boxStyle, showCard = true }) {
  return (
    <ScrollView contentContainerStyle={[styles.boxContainer, boxStyle]}>
 <View style={styles.paper}>
        {showCard ? (
          <View style={styles.card}>
            {additionalContent ? (
              additionalContent
            ) : (
              buttons && Array.isArray(buttons) && buttons.map((button, index) => (
                <ReusableButton key={index} buttonText={button.text} to={button.path} style={button.style} />
              ))
            )}
          </View>
        ) : null}
        {content}
      </View> 
    </ScrollView>
  );
}

// ChecklistMainContent converted to React Native
function ChecklistScreen() {
  const buttons = [
    { text: "Create Checklist", path: "CreateChecklist" },
    { text: "Default Checklist", path: "default-checklist" },
    { text: "Properties", path: "Properties" },
  ];

  return (
    <LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
      style={styles.fullScreenGradient}
    >
      {/*<View style={styles.titleContainer}>
        <Text style={styles.titleText}>Checklist</Text>
  </View>*/}
      <ChecklistMain
        content={
          <View style={styles.imageContainer}>
           <Image source={require('./i1.png')} style={styles.image} />
          </View>
        }
        buttons={buttons}
      />
   </LinearGradient>
  );
}


// Define styles for buttonContainer and buttonText
const styles = StyleSheet.create({
  fullScreenGradient: {
    flex: 1,  
  },
  boxContainer: {
    padding: 20,
  },
  paper: {
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card: {
    width: '90%',
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: 200, // Specify width
    height: 50, // Specify height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginVertical: 5, // Add vertical margin for spacing between buttons
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ChecklistScreen