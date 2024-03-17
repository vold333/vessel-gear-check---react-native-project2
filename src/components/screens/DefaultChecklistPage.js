import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const DefaultChecklistPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigation = useNavigation();

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    const paths = ['PreDeparture', 'PreArrival'];
    navigation.navigate(paths[index]);
  };

  const listItems = ['Pre - Departure', 'Pre - Arrival'].map((text, index) => (
    <TouchableOpacity
      key={text}
      onPress={() => handleListItemClick(index)}
      style={[
        styles.listItemButton,
        selectedIndex === index && styles.selectedListItem,
      ]}
    >
      <Text style={styles.listItemText}>{text}</Text>
    </TouchableOpacity>
  ));

  return (
    <LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
      style={styles.fullScreenGradient}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>Order</Text>
          </View>
          {listItems}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  fullScreenGradient: {
    flex: 1,
    
    
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  listContainer: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
    marginBottom: 20,
  },

  container: {
    flex: 1,
    
    //backgroundColor: '#EFEFEF', // Light grey background for the whole page
   // background: 'linear-gradient(90.37deg, #FFFFFF 1.67%, #A59FFF 36.1%, #6C63FF 62.64%, #2C1FFD 100%)',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100, // Adjusted for better proportion
    marginTop: 20, // Give some space from the top of the screen
    marginBottom: 20, // Space before the list starts
  },
  image: {
    width: '90%', // Adjust according to your image's aspect ratio
    height: '100%',
    resizeMode: 'contain', // Ensures the image fits without stretching
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10, // Make sure the back button is clickable
  },
  backButton: {
    backgroundColor: '#007AFF', // iOS blue for a native feel
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20, // More rounded corners
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    alignSelf: 'stretch', // Take the full width available
    backgroundColor:  'white', // White background for the list
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10, // Padding on the sides
    marginHorizontal: 20, // Margin on the sides
    marginVertical:150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Shadow for Android (and iOS)
  },
  listHeader: {
    backgroundColor: 'black', // A different blue to catch the eye
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10, // Rounded corners for the header too
    marginBottom: 20, // Space before list items start
  },
  listHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18, // Larger font size for readability
    textAlign:'center',
  },
  listItemButton: {
   // backgroundColor: '#F0F0F0', // Light grey background for list items
   backgroundColor: '#007BFF',
   justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Full width of its container
    padding: 15, // More padding for tap-ability
    borderRadius: 10, // Consistent rounded corners
    marginBottom: 10, // Space between items
  },
  selectedListItem: {
    backgroundColor: '#D1EFFF', // Light blue for selected items
  },
  listItemText: {
    color:'white',
    textAlign: 'center',
    fontWeight: '500', // Medium font weight
  },
  blueButton: {
    backgroundColor: '#007AFF', // Consistent blue theme
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20, // Consistent rounded corners
    marginBottom: 20, // Space before list starts
    alignSelf: 'center', // Center button in the container
    width: '60%', // Button width
  },
  blueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DefaultChecklistPage;