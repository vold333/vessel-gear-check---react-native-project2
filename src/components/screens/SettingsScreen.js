// SettingsScreen.js

import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SettingsScreen(props) {
  const navigation = useNavigation();

  const handlePersonalizationPress = () => {
    navigation.navigate('Personalization');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../../assets/images/avatar.jpg')}
          style={[styles.avatar, { borderRadius: 50 }]}
        />
      </View>
      <TouchableOpacity style={styles.personalizationButton} onPress={handlePersonalizationPress}>
        <Text style={styles.personalizationButtonText}>Personalization</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  personalizationButton: {
    borderRadius: 10,
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  personalizationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
