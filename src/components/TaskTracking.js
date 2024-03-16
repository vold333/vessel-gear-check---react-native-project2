import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';

const TaskTracking = () => {
  const navigation = useNavigation();
  const progress = 58; // Hardcoded progress value (70%)

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Icon name="progress-check" size={30} color="white" style={styles.progressIcon} />
        <Text style={styles.title}>Current Progress</Text>
      </View>
      <View style={styles.progressContainer}>
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
            strokeDasharray={`${progress * 5.65}, 565`}
          />
  
          <SvgText
            x="45%"
            y="55%"
            textAnchor="middle"
            fontSize="40"
            fill="black"
          >{progress}%
          </SvgText>
        </Svg>
        {/* Add image below the progress circle */}
        <Image
          source={require('../assets/images/undraw.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
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
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Adjust the spacing between the progress circle and the image
  },
  progressIcon: {
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    // Make it a circular image
    marginTop: 50, // Adjust the spacing between the progress circle and the image
    marginBottom: 10, // Add padding at the bottom
    borderWidth: 2, // Add border for better appearance
     // Border color same as title background
  },
});

export default TaskTracking;
