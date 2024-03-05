import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

function RolesScreen(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isButtonSelected, setIsButtonSelected] = useState(false);

  // Function to toggle selection of an option
  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Function to handle "Select" button press
  const handleSelectPress = () => {
    setIsButtonSelected(!isButtonSelected);
    if (isButtonSelected) {
      setSelectedOptions([]);
    }
    console.log('Selected Options:', selectedOptions);
  };

  return (
    <View style={styles.container}>
      {/* Vertical container with border radius */}
      <View style={styles.verticalContainer}>
        {/* Seven select buttons */}
        <View style={styles.buttonContainer}>
          <Button 
            title="Captain" 
            onPress={() => toggleOption('Captain')} 
            color={selectedOptions.includes('Captain') ? 'green' : undefined} 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Bridge" 
            onPress={() => toggleOption('Bridge')} 
            color={selectedOptions.includes('Bridge') ? 'green' : undefined} 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Engine" 
            onPress={() => toggleOption('Engine')} 
            color={selectedOptions.includes('Engine') ? 'green' : undefined} 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Logistics" 
            onPress={() => toggleOption('Logistics')} 
            color={selectedOptions.includes('Logistics') ? 'green' : undefined} 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Safety" 
            onPress={() => toggleOption('Safety')} 
            color={selectedOptions.includes('Safety') ? 'green' : undefined} 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Hospitality" 
            onPress={() => toggleOption('Hospitality')} 
            color={selectedOptions.includes('Hospitality') ? 'green' : undefined} 
          />
        </View>
        {/* Select button */}
        <View style={styles.buttonContainer}>
          <Button 
            title={isButtonSelected ? 'Selected' : 'Select'} 
            onPress={handleSelectPress} 
            color={isButtonSelected ? 'orange' : undefined} 
          />
        </View>
      </View>

      {/* Right container */}
      <View style={styles.rightContainer}>
        <Text style={styles.rightContainerText}>Right Container</Text>
        {/* You can add any content you want in the right container */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verticalContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#E1E1E1',
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    marginBottom: 5,
    padding: 25,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    margin: 10,
    borderRadius: 10,
  },
  rightContainerText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default RolesScreen;
