import React from 'react'; 
import { View, StyleSheet, Text } from 'react-native'; 
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'; 
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
 
const DrawerList = [ 
  { icon: 'account-hard-hat', label: 'User' }, // Captain item added 
  { icon: 'home-outline', label: 'Home', navigateTo: 'Home' }, 
  { icon: 'clipboard-text-outline', label: 'Checklist', navigateTo: 'Checklist' }, 
  { icon: 'cog-outline', label: 'Settings', navigateTo: 'Settings' }, 
  { icon: 'logout', label: 'Sign out', navigateTo: 'Login' }, 
]; 
 
const DrawerLayout = ({ icon, label, navigateTo }) => { 
  const navigation = useNavigation(); 
 
  const itemStyle = label === 'User' ? styles.captainItem : styles.drawerItem; 
  const labelStyle = label === 'User' ? styles.captainLabel : styles.drawerLabel; 
  const iconStyle = label === 'User' ? styles.captainIcon : styles.iconContainer; 
 
  if (label === 'User') { 
    return ( 
      <View style={styles.captainContainer}> 
        <View style={iconStyle}> 
          <Icon name={icon} color={'white'} size={30} /> 
        </View> 
        <Text style={labelStyle}>{label}</Text> 
      </View> 
    ); 
  } 
 
  return ( 
    <DrawerItem 
      icon={({ color, size }) => ( 
        <Icon name={icon} color={'black'} size={30} /> 
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
  return DrawerList.map((el, i) => ( 
    <DrawerLayout 
      key={i} 
      icon={el.icon} 
      label={el.label} 
      navigateTo={el.navigateTo} 
    /> 
  )); 
}; 
 
const UserDrawerContent = () => { 
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
  drawerLabel: { 
    color: 'black', 
    fontWeight: 'bold', 
    fontSize: 15, 
  }, 
  captainItem: { 
    backgroundColor: 'black', 
    marginVertical: 5, 
    borderRadius: 25, 
  }, 
  captainLabel: { 
    color: 'black', 
    fontWeight: 'bold', 
    fontSize: 17, 
    marginRight: 10,
  }, 
  captainIcon: { 
    backgroundColor: 'black', // Yellow background for the icon 
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
  iconContainer: { 
    padding: 5, // Adjust padding as needed 
    marginRight: 10, // Adjust margin as needed 
  }, 
}); 
 
export default UserDrawerContent;
 
 