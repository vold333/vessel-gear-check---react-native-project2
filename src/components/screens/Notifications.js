/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Notification = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0); // State for notification count
  const [notifications, setNotifications] = useState([]); // State for notifications array

  const exampleNotifications = [
    { 
      message: "New Notification 1", 
      dateTime: "2024-03-18 10:30 AM" 
    },
    { 
      message: "New Notification 2", 
      dateTime: "2024-03-18 11:45 AM" 
    },
    { 
      message: "New Notification 3", 
      dateTime: "2024-03-18 01:15 PM" 
    },
  ];

  const handleNotificationPress = () => {
    setModalVisible(true);
    // Reset notification count when opening modal
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    // Set initial notification count when component mounts
    setNotificationCount(exampleNotifications.length);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNotificationPress}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="notifications-outline" size={25} color="#fff" />
          {notificationCount > 0 && ( // Display count only if greater than 0
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationCount}>{notificationCount}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={handleCloseModal}
        >
          <View style={styles.drawerContent}>
            <Text style={styles.modalText}>Notifications</Text>
            {/* Render example notifications */}
            {exampleNotifications.map((notification, index) => (
              <View key={index} style={[styles.notificationContainer, { width: '100%' }]}>
                <Text style={styles.notificationText}>
                  {notification.message}
                </Text>
                <Text style={styles.notificationDateTime}>
                  {notification.dateTime}
                </Text>
              </View>
            ))}
            <TouchableOpacity onPress={handleCloseModal} style={[styles.closeButton, styles.topRight]}>
              <Icon name="close" size={25} color="#fff"  />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 16,
    right: 18,
  },
  modalContainer: {
    flex: 1,
    position: 'absolute',
    top: 48,
    left: 10,
    right: 10,
    width: '95%', // Full width
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust opacity as needed
    borderRadius: 20 
  },
  drawerContent: {
    borderRadius: 10,
    padding: 10,
    width: '80%', // 80% of the screen width
    maxHeight: '80%', // Max height relative to the screen height
    alignSelf: 'center', // Center horizontally
    marginTop: 30,
    marginBottom:20, // Adjust as needed
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
    fontWeight:'bold'
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  notificationBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
    marginTop: -5,
    width: 20,
    height: 20,
  },
  notificationCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  notificationContainer: {
    backgroundColor: 'grey', // Adjust opacity as needed
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  notificationText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  notificationDateTime: {
    color: '#bbb',
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default Notification;

