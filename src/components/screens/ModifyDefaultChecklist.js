import {React} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,ScrollView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
//import { Ionicons } from '@expo/vector-icons'; // Make sure you have expo installed or use another way to import icons

const ModifyDefaultChecklist = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
 // const imageUrl = "path_to_your_image"; // Ensure you have a valid path for your image
  const navigation = useNavigation();

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    const paths = ['Deck', 'Engine', 'Safety', 'Logistics', 'Hospitality']; // Update with your actual routes
    navigation.navigate(paths[index]);
  };

  const departments = ['Deck', 'Engine', 'Safety', 'Logistics', 'Hospitality'];

  return (<LinearGradient
    colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
    style={styles.fullScreenGradient}
  >
    <ScrollView style={styles.container}>
      

      <View style={styles.listContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Department</Text>
        </View>
        {departments.map((department, index) => (
          <TouchableOpacity
            key={department}
            onPress={() => handleListItemClick(index)}
            style={[
              styles.listItem,
              selectedIndex === index && styles.selectedItem
            ]}
          >
            <Text style={styles.listItemText}>{department}</Text>
          </TouchableOpacity>
        ))}
      </View>

  
    </ScrollView></LinearGradient>
  );
};

const styles = StyleSheet.create({
  fullScreenGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  listContainer: {
    marginTop: 70,
    marginHorizontal: 20, // Sides margin to not stick to the screen edges
    backgroundColor: 'white', // A neutral, clean background color
    borderRadius: 20, // Soft, rounded corners for the container
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, // Soft shadow for a subtle depth effect
    shadowRadius: 8,
    elevation: 5, // For Android shadow
  },
  headerContainer: {
    backgroundColor: '#007AFF', // A pleasant, inviting blue
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopLeftRadius: 20, // Matching the container's border radius
    borderTopRightRadius: 20,
    marginBottom: 20, // Space before list items
    width: '100%', // Ensure it spans the entire container width
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20, // Slightly larger for emphasis
    fontWeight: 'bold',
  },
  listItem: {
    backgroundColor: '#F7F7F8', // Very light grey, almost white, for items
    paddingVertical: 15,
    paddingHorizontal: 25, // Generous padding for a spacious look
    marginBottom: 10,
    flexDirection: 'row', // Ready for potential icons or other elements
    justifyContent: 'center', // Center the content
    borderRadius: 10, // Soft, rounded corners for each item
    borderWidth: 1, // Slight border to distinguish items
    borderColor: '#E1E1E1', // Soft, light border color
  },
  selectedItem: {
    backgroundColor: '#E1EFFF', // Light blue to subtly indicate selection
    borderColor: '#007AFF', // Match the header color for consistency
  },
  listItemText: {
    color: '#333', // Dark grey for readability
    fontSize: 16, // Accessible font size
    fontWeight: '500', // Medium weight for clarity
  },
  backButton: {
    backgroundColor: '#007AFF', // Matching the header for consistency
    padding: 12,
    borderRadius: 20, // Fully rounded sides for a modern button look
    marginTop: 20,
    alignSelf: 'flex-start', // Align to the left or center as preferred
    marginLeft: 20, // Consistent with the list container margin
  },
  backButtonText: {
    color: 'white',
    fontWeight: '600', // Bold text to stand out on the button
  },
});



export default ModifyDefaultChecklist;
