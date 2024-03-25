import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerList = [
  { icon: 'account-tie-hat-outline', label: 'Captain' },
  { icon: 'home-outline', label: 'Home', navigateTo: 'Home' },
  { icon: 'account-multiple', label: 'Roles', navigateTo: 'Roles' },
  { icon: 'ship-wheel', label: 'Vessel Profile', navigateTo: 'Vessel Profile' },
  { icon: 'clipboard-text-outline', label: 'Checklist', navigateTo: 'Checklist' },
  { icon: 'chart-bar', label: 'Visualization', navigateTo: 'Visualization' },
  { icon: 'cog-outline', label: 'Settings', navigateTo: 'Settings' },
  { icon: 'logout', label: 'Sign out', navigateTo: 'Login' },
];

const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();

  const itemStyle = label === 'Captain' ? styles.captainItem : styles.drawerItem;
  const labelStyle = label === 'Captain' ? styles.captainLabel : styles.drawerLabel;
  const iconStyle = label === 'Captain' ? styles.captainIcon : styles.iconContainer;

  if (label === 'Captain') {
    return (
      <View style={styles.captainContainer}>
        <View style={[iconStyle, label !== 'Captain']}>
          <Icon name={icon} color={'black'} size={30} style={styles.icon} />
        </View>
        <Text style={labelStyle}>{label}</Text>
      </View>
    );
  }

  return (
    <DrawerItem
      icon={({ color, size }) => (
        <View style={[iconStyle, label !== 'Captain']}>
          <Icon name={icon} color={'black'} size={30} style={styles.icon} />
        </View>
      )}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
      style={itemStyle}
      labelStyle={labelStyle}
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
    <View style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: '#8C8CFF',
  },
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  drawerItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    marginVertical: 5,
  },
  captainItem: {
    backgroundColor: 'black', // Background color for the "Captain" item
    marginVertical: 5,
    borderRadius: 25,  
  },
  drawerLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  captainLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
  iconContainer: {
    padding: 5, // Adjust padding as needed
    marginRight: 10, // Adjust margin as needed
  },
  captainIcon: {
    backgroundColor: 'white', // Yellow background for the icon
    borderRadius: 50, // Make it round
    padding: 5, // Adjust padding as needed
    marginRight: 10, // Adjust margin as needed
    marginBottom: 5
  },
  captainContainer: {
    alignItems: 'center',
    marginVertical: 5,
    marginLeft: 10,
    borderRadius: 30,
  },
});

export default DrawerContent;
