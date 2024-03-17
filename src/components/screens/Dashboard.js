/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import TaskTracking from '../TaskTracking';

const Stack = createStackNavigator();

function Dashboard({ navigation }) {
  const taskCompletionItems = ['Task 1', 'Task 2', 'Task 3'];
  const alertItems = [];

  // Placeholder text for empty task completion and alert items
  const placeholderTask = 'Pending';
  const placeholderAlert = 'Overdue';

  return (
    <Stack.Navigator >
      <Stack.Screen name="DashboardMain" options={{ headerShown: false }}>
        {() => (
          <View style={styles.container}>
            <TouchableOpacity style={[styles.button, { width: '70%' }]} onPress={() => navigation.navigate('TaskTracking')}>
              <Icon name="map-marker" size={20} color="white" style={styles.locationIcon} />
              <Text style={styles.buttonText}>Task Tracking</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
              <View style={styles.cardContainer}>
                <View style={styles.cardWrapper}>
                  <View style={[styles.card, styles.shadow]}>
                    <Text style={styles.cardTitle}>Task Completion</Text>
                    <ScrollView style={styles.itemList}>
                      {taskCompletionItems.length === 0 ? (
                        <View style={styles.placeholderContainer}>
                          <Icon name="clock-outline" size={30} color="yellow" style={styles.icon} />
                          <Text style={styles.placeholderText}>{placeholderTask}</Text>
                        </View>
                      ) : (
                        taskCompletionItems.map((item, index) => (
                          <View key={index} style={styles.itemContainer}>
                            <Icon name="checkbox-marked-circle" size={20} color="white" style={styles.bulletPointTask} />
                            <Text style={styles.itemText}>{item}</Text>
                          </View>
                        ))
                      )}
                    </ScrollView>
                  </View>
                </View>
                <View style={styles.cardWrapper}>
                  <View style={[styles.card, styles.shadow]}>
                    <Text style={styles.cardTitle}>Alert</Text>
                    <ScrollView style={styles.itemList}>
                      {alertItems.length === 0 ? (
                        <View style={styles.placeholderContainer}>
                          <Icon name="alert-outline" size={30} color="red" style={styles.icon} />
                          <Text style={styles.placeholderText}>{placeholderAlert}</Text>
                        </View>
                      ) : (
                        alertItems.map((item, index) => (
                          <View key={index} style={styles.itemContainer}>
                            <Icon name="alert-circle" size={20} color="white" style={styles.bulletPointAlert} />
                            <Text style={styles.itemText}>{item}</Text>
                          </View>
                        ))
                      )}
                    </ScrollView>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="TaskTracking" component={TaskTracking} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  button: {
    backgroundColor: '#151618',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row', // Add flexDirection to align icon and text horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  locationIcon: {
    marginRight: 10, // Adjust spacing between icon and text
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  scrollView: {
    width: '98%', // Set the width to occupy 98% of the screen width
  },
  cardContainer: {
    width: '98%', // Set the width to occupy 98% of the screen width
    marginTop: 20,
    backgroundColor: '#D1D4DA', // Light grey background color
    borderRadius: 10,
    padding: 10,
    alignItems: 'center', // Center the content horizontally
  },
  cardWrapper: {
    marginBottom: 10,
    width: '100%', // Ensure the card wrapper takes full width of its parent
  },
  card: {
    backgroundColor: '#6D7078',
    marginLeft: 10,
    marginRight: 10, // Take full width of the container
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  itemList: {
    flexGrow: 1, // Allow content to grow within ScrollView
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletPointTask: {
    marginRight: 10,
    marginBottom: 10,
    color: '#19B00E',
  },
  bulletPointAlert: {
    marginRight: 10,
    marginBottom: 10,
    color: '#DD4352',
  },
  itemText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  placeholderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholderText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
  shadow: {
    shadowColor: 'grey',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 10,
    shadowRadius: 20,
    elevation: 15,
  },
});

export default Dashboard;
