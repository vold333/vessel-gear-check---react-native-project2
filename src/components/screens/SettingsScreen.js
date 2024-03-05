import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Modal, TextInput } from 'react-native';

function SettingsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    console.log('Hii');
  }, []);

  const handlePersonalizationPress = () => {
    setModalVisible(true);
  };

  const handleUpdatePress = () => {
    // Implement your update logic here
    console.log('Update button pressed');
    setModalVisible(false);
  };

  const handleCancelPress = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../../assets/images/avatar.jpg')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Personalization" onPress={handlePersonalizationPress} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../../assets/images/avatar.jpg')}
                style={styles.avatar}
              />
            </View>
            <TextInput
              style={styles.ssinput}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.ssinput}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.ssinput}
              placeholder="Position"
              value={position}
              onChangeText={setPosition}
            />
            <View style={styles.buttonRow}>
              <Button title="Update" onPress={handleUpdatePress} />
              <Button title="Cancel" onPress={handleCancelPress} />
            </View>
          </View>
        </View>
      </Modal>
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
    borderRadius: 50, // for circular avatar
  },
  buttonContainer: {
    width: '40%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ssinput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 9,
    padding: 10,
    marginBottom: 10,
    width: '100%', // Ensure input bars expand to the full width
  },  
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});

export default SettingsScreen;
