import React, { useState } from 'react';
import { SafeAreaView,View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const PreDeparture = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  // Note: You need to use a local image or a remote URL for React Native
 // const imageUrl = "path/to/your/image.png"; // Update this path
  const navigation = useNavigation();

  const departmentItems = ['Deck', 'Engine', 'Safety', 'Logistics', 'Hospitality'];
  const paths = ['DefaultDeck', 'DefaultEngine', 'DefaultSafety', 'DefaultLogistics', 'DefaultHospitality']; // Ensure these are the correct route names

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    navigation.navigate(paths[index]);
  };

  return (
     <LinearGradient
    colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
    style={styles.fullScreenGradient}
  >
     
      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderText}>Department</Text>
        </View>
        {departmentItems.map((text, index) => (
          <TouchableOpacity
            key={text}
            onPress={() => handleListItemClick(index)}
            style={[
              styles.listItem,
              selectedIndex === index && styles.selectedListItem
            ]}
          >
            <Text style={styles.listItemText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View></LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  fullScreenGradient: {
    flex: 1,
  },
  
  container: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // A light grey background for the whole page
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250, // Adjust based on your image and preference
    marginTop: 30, // Provide some top margin
  },
  image: {
    width: '90%', // Use percentage to maintain aspect ratio and responsiveness
    height: '100%',
    resizeMode: 'contain', // This ensures your image scales correctly within the container
  },
  backButton: {
    position: 'absolute', // Position it over your screen content
    top: 40, // Distance from top
    left: 20, // Distance from left
    backgroundColor: '#007AFF', // A pleasant blue that's often used in iOS apps
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // Fully rounded corners
    zIndex: 10, // Ensure it's above other elements
  },
  backButtonText: {
    color: 'white',
    fontWeight: '600', // Slightly bolder than normal to stand out on the blue background
  },
  listContainer: {
    marginTop: 70,
    marginHorizontal: 20, // Sides margin to not stick to the screen edges
    backgroundColor: 'white',
    borderRadius: 10, // Rounded corners for the container
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, // For Android shadow
  },
  listHeader: {
    backgroundColor: '#007AFF', // Matching the back button color for consistency
    width: '100%',
    padding: 15,
    marginBottom: 20, // Space before list items
    borderRadius: 10, // Consistent rounded corners
    alignItems: 'center',
  },
  listHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18, // Slightly larger for prominence
  },
  listItem: {
    backgroundColor: '#F7F7F8', // A very light grey, almost white for items
    paddingVertical: 15,
    paddingHorizontal: 25, // Slightly more padding for a spacious look
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row', // If you plan to add icons to the list items
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center', // Center items vertically
    borderRadius: 10, // Rounded corners for each item
  },
  selectedListItem: {
    backgroundColor: '#E1EFFF', // A light blue to indicate selection, gentle to the eyes
  },
  listItemText: {
    color: '#333', // Darker color for text for better readability
    fontWeight: '500', // Medium weight for clarity
    fontSize: 16, // Slightly larger than default for accessibility
  },
});

export default PreDeparture;
