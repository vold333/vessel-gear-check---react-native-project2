<<<<<<< HEAD
// DrawerContent.js

=======
>>>>>>> main
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerList = [
  { icon: 'home-outline', label: 'Home', navigateTo: 'Home' },
  { icon: 'account-multiple', label: 'Roles', navigateTo: 'Roles' },
<<<<<<< HEAD
  { icon: 'ship-wheel', label: 'Vessel Profile', navigateTo: 'Vessel Profile' }, // Add Vessel Profile here
  { icon: 'clipboard-text-outline', label: 'Checklist', navigateTo: 'Checklist' },
=======
  { icon: 'bookshelf', label: 'Checklist', navigateTo: 'Checklist' },
>>>>>>> main
  { icon: 'chart-bar', label: 'Visualization', navigateTo: 'Visualization' },
  { icon: 'cog-outline', label: 'Settings', navigateTo: 'Settings' },
  { icon: 'logout', label: 'Sign out', navigateTo: 'Login' },
];

<<<<<<< HEAD

=======
>>>>>>> main
const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <DrawerItem
<<<<<<< HEAD
      icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
=======
      icon={({ color, size }) => <Icon name={icon} color={'black'} size={30} />}
>>>>>>> main
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
<<<<<<< HEAD
=======
      style={styles.drawerItem}
      labelStyle={styles.drawerLabel}
>>>>>>> main
    />
  );
};

const DrawerItems = () => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
      />
    );
  });
};

const DrawerContent = () => {
  return (
<<<<<<< HEAD
    <View style={{ flex: 1 }}>
=======
    <View style={styles.container}>
>>>>>>> main
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
=======
  container: {
    flex: 1,
    backgroundColor: '#8C8CFF', // Background color for the entire drawer container
  },
>>>>>>> main
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
<<<<<<< HEAD
});

export default DrawerContent;

=======
  drawerItem: {
    backgroundColor: '#FFFFFF', // Background color for each item
    borderRadius: 25, // Border radius for each item
    marginVertical: 5, // Add vertical margin between items
  },
  drawerLabel: {
    color: 'black', // Text color for the items
    fontWeight: 'bold', // Add font weight if desired
    fontSize: 15
  },
});

export default DrawerContent;
>>>>>>> main
