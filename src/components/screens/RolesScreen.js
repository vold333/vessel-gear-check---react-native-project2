import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';

function RolesScreen(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isVerticalContainerVisible, setIsVerticalContainerVisible] = useState(true);
  const [showProgress, setShowProgress] = useState(false); // State to control showing progress percentage
  const [progressPercentage, setProgressPercentage] = useState(0); // State to store progress percentage

  const [taskCompletion, setTaskCompletion] = useState({});
  const [alert, setAlert] = useState({});

  const tasks = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ];

  const alerts = [
    { id: 1, text: 'Alert 1' },
    { id: 2, text: 'Alert 2' },
    { id: 3, text: 'Alert 3' },
  ];

  // Function to toggle selection of an option
  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
      setTaskCompletion(prevState => {
        const newState = { ...prevState };
        delete newState[option];
        return newState;
      });
      setAlert(prevState => {
        const newState = { ...prevState };
        delete newState[option];
        return newState;
      });
    } else {
      setSelectedOptions([...selectedOptions, option]);
      // Simulate fetching task completion and alert for the selected role
      // Replace the setTimeout with your actual data fetching logic
      setTimeout(() => {
        setTaskCompletion(prevState => ({ ...prevState, [option]: 'Task of ' + option }));
        setAlert(prevState => ({ ...prevState, [option]: 'Alert of ' + option }));
      }, 1000);
    }
  };

  // Function to handle toggle visibility of vertical container
  const toggleVerticalContainer = () => {
    setIsVerticalContainerVisible(!isVerticalContainerVisible);
  };

  // Function to toggle showing progress percentage
  const toggleProgress = () => {
    setShowProgress(!showProgress);
  };

  // Function to handle progress button press
  const handleProgressPress = () => {
    // Calculate total tasks
    let totalTasks = selectedOptions.length * 3; // Assuming each role has 3 tasks

    // Calculate completed tasks
    let completedTasks = Object.keys(taskCompletion).length;

    // Calculate progress percentage
    let progressPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    // Update the progress percentage state
    setProgressPercentage(progressPercentage);

    // Toggle showing progress
    toggleProgress();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={[styles.button, { width: '95%' }]} onPress={handleProgressPress}>
          <Icon name="map-marker" size={20} color="white" style={styles.locationIcon} />
          <Text style={styles.buttonText}>Task Tracking</Text>
        </TouchableOpacity>
      </View>
      {showProgress ? ( // Show progress percentage
        <View style={styles.progressContainer}>
           <View style={styles.titleContainer}>
        <Icon name="progress-check" size={30} color="white" style={styles.progressIcon} />
        <Text style={styles.title}>Current Progress</Text>
      </View>
          <Svg width="200" height="200">
            <Circle
              cx="100"
              cy="100"
              r="90"
              stroke="#D1D4DA"
              strokeWidth="10"
              fill="none"
            />
            <Circle
              cx="100"
              cy="100"
              r="90"
              stroke="blue"
              strokeWidth="10"
              fill="none"
              strokeDasharray={`${progressPercentage * 5.65}, 565`}
            />
            <SvgText
              x="45%"
              y="55%"
              textAnchor="middle"
              fontSize="40"
              fill="black"
            >{progressPercentage}%
            </SvgText>
          </Svg>
           {/* Add image below the progress circle */}
        <Image
          source={require('../../assets/images/undraw.png')}
          style={styles.image}
        />
        </View>
      ) : ( // Show tasks and alerts
        <View style={styles.bottomContainer}>
                 <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
            <View style={styles.cardContainer}>
              <View style={styles.cardWrapper}>
                <View style={[styles.card, styles.shadow]}>
                  <Text style={styles.cardTitle}>Task Completion</Text>
                  <ScrollView style={styles.itemList}>
                    {selectedOptions.map(option => (
                      <View key={option}>
                        <View style={styles.taskCompletionItem}>
                          <Text style={styles.itemText}>{taskCompletion[option]}</Text>
                        </View>
                        {tasks.map(task => (
                          <View key={task.id} style={styles.itemContainer}>
                            <Icon name="checkbox-marked-circle" size={15} color="white" style={styles.bulletPointTask} />
                            <Text style={styles.itemText}>{task.text}</Text>
                          </View>
                        ))}
                      </View>
                    ))}
                  </ScrollView>
                </View>
              </View>
              <View style={styles.cardWrapper}>
                <View style={[styles.card, styles.shadow]}>
                  <Text style={styles.cardTitle}>Alert</Text>
                  <ScrollView style={styles.itemList}>
                    {selectedOptions.map(option => (
                      <View key={option}>
                        <View style={styles.alertItem}>
                          <Text style={styles.itemText}>{alert[option]}</Text>
                        </View>
                        {alerts.map(alert => (
                          <View key={alert.id} style={styles.itemContainer}>
                            <Icon name="alert-circle" size={15} color="white" style={styles.bulletPointAlert} />
                            <Text style={styles.itemText}>{alert.text}</Text>
                          </View>
                        ))}
                      </View>
                    ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.toggleButton} onPress={toggleVerticalContainer}>
            <Text style={styles.toggleButtonText}>{isVerticalContainerVisible ? 'Hide' : 'View'} Roles</Text>
          </TouchableOpacity>
          {isVerticalContainerVisible && (
            <View style={styles.verticalContainer}>
              <View style={[styles.buttonContainer,{ marginBottom: 10 }]}>
                <Button
                  title="Captain"
                  onPress={() => toggleOption('Captain')}
                  color={selectedOptions.includes('Captain') ? 'green' : undefined}
                />
              </View>
              <View style={[styles.buttonContainer, { marginBottom: 10 }]}>
                <Button
                  title="Bridge"
                  onPress={() => toggleOption('Bridge')}
                  color={selectedOptions.includes('Bridge') ? 'green' : undefined}
                />
              </View>
              <View style={[styles.buttonContainer, { marginBottom: 10 }]}>
                <Button
                  title="Engine"
                  onPress={() => toggleOption('Engine')}
                  color={selectedOptions.includes('Engine') ? 'green' : undefined}
                />
              </View>
              <View style={[styles.buttonContainer, { marginBottom: 10 }]}>
                <Button
                  title="Logistics"
                  onPress={() => toggleOption('Logistics')}
                  color={selectedOptions.includes('Logistics') ? 'green' : undefined}
                />
              </View>
              <View style={[styles.buttonContainer, { marginBottom: 10 }]}>
                <Button
                  title="Safety"
                  onPress={() => toggleOption('Safety')}
                  color={selectedOptions.includes('Safety') ? 'green' : undefined}
                />
              </View>
              <View style={[styles.buttonContainer, { marginBottom: 10 }]}>
                <Button
                  title="Hospitality"
                  onPress={() => toggleOption('Hospitality')}
                  color={selectedOptions.includes('Hospitality') ? 'green' : undefined}
                />
              </View>
              {/* Select button */}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    paddingHorizontal: 70,
    paddingVertical: 5,
  },
  bottomContainer: {
    flex: 1,
  },
  button: {
    backgroundColor: '#151618',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row',
    marginLeft:8, // Add flexDirection to align icon and text horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  progressContainer: {
    flex: 1,
    justifyContent: 'flex start',
    alignItems: 'center',
  },
  toggleButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4539FF',
    padding: 10,
    borderRadius: 5,
  },
  toggleButtonText:{
    color:'white',
    fontWeight:'bold'
  },
  taskCompletionItem: {
    marginBottom: 10,
    backgroundColor: '#19B00E',
    padding: 5,
    borderRadius: 10,
  },
  alertItem: {
    marginBottom: 10,
    backgroundColor: '#DD4352',
    padding: 5,
    borderRadius: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
  },
  verticalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 50,
    left: 0,
    borderRadius: 10,
    backgroundColor: '#E1E1E1',
    padding: 10,
    margin: 5,
  },
  buttonContainer: {
    marginBottom: 5,
    padding: 18,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  scrollView: {
    width: '98%', // Set the width to occupy 98% of the screen width
  },
  cardContainer: {
    width: '95%', // Set the width to occupy 98% of the screen width
    marginTop: 20,
    backgroundColor: '#D1D4DA', // Light grey background color
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginLeft:10, // Center the content horizontally
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
  shadow: {
    shadowColor: 'grey',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 10,
    shadowRadius: 20,
    elevation: 15,
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
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  bullet: {
    color: 'white',
    marginRight: 10,
  },
  icon: {
    marginRight: 5,
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    marginBottom:40,
    backgroundColor: '#486EBA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
  progressIcon: {
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 50, // Adjust the spacing between the progress circle and the image
    marginBottom: 10, // Add padding at the bottom
    borderWidth: 2, // Add border for better appearance
  },
});

export default RolesScreen;
