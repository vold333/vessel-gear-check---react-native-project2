import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing Icon from react-native-vector-icons

export const Properties = () => {
  const [inputValues, setInputValues] = useState({
    propertyOneDate: new Date(),
    propertyTwoDate: new Date(),
    propertyOneTime: new Date(),
    propertyTwoTime: new Date(),
    propertyThree: '',
    propertyFour: '',
  });
  const [showDatePicker, setShowDatePicker] = useState({ propertyOne: false, propertyTwo: false });
  const [showTimePicker, setShowTimePicker] = useState({ propertyOne: false, propertyTwo: false });
  const [countdown, setCountdown] = useState({ propertyOne: '', propertyTwo: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const departureDateTime = mergeDateAndTime(inputValues.propertyOneDate, inputValues.propertyOneTime);
      const arrivalDateTime = mergeDateAndTime(inputValues.propertyTwoDate, inputValues.propertyTwoTime);
      const departureTimeLeft = departureDateTime - now;
      const arrivalTimeLeft = arrivalDateTime - now;
  
      // Define the function to calculate time left
      const calculateTimeLeft = (timeLeft) => {
        if (timeLeft > 0) {
          const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
          const seconds = Math.floor((timeLeft / 1000) % 60);
          return `${hours}h ${minutes}m ${seconds}s left`;
        } else {
          return 'Time has passed';
        }
      };
  
      // Update departure countdown
      if (departureTimeLeft > 0) {
        setCountdown(prevCountdown => ({
          ...prevCountdown,
          propertyOne: calculateTimeLeft(departureTimeLeft)
        }));
      } else {
        setCountdown(prevCountdown => ({
          ...prevCountdown,
          propertyOne: 'Time has passed'
        }));
      }
  
      // Update arrival countdown only if departure time has passed
      if (departureTimeLeft <= 0) {
        setCountdown(prevCountdown => ({
          ...prevCountdown,
          propertyTwo: calculateTimeLeft(arrivalTimeLeft)
        }));
      } else {
        setCountdown(prevCountdown => ({
          ...prevCountdown,
          propertyTwo: 'Awaiting departure...'
        }));
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, [inputValues]);

  const mergeDateAndTime = (date, time) => {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes()
    );
  };
 // Dynamic properties for rendering each property's controls
  const properties = ['propertyOne', 'propertyTwo'];

  const updateCountdown = (property, futureTime, now) => {
    const timeLeft = futureTime - now;
    let countdownText = 'Time has passed';

    if (timeLeft > 0) {
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
      countdownText = `${hours}h ${minutes}m ${seconds}s left`;
    }

    setCountdown((prevCountdown) => ({
      ...prevCountdown,
      [property]: countdownText,
    }));
  };

 // Handle date or time change
 const handleDateTimeChange = (event, selectedValue, property, type) => {
    // Prevent the default behavior if applicable
    event?.preventDefault?.();
  
    if (selectedValue) {
      // Update the values for date or time based on what was picked
      setInputValues((prevValues) => {
        const newValues = { ...prevValues };
        if (type === 'Date') {
          newValues[`${property}Date`] = selectedValue;
        } else {
          newValues[`${property}Time`] = selectedValue;
        }
        return newValues;
      });
  
      // Immediately update the visibility state for the date or time picker
      if (type === 'Date') {
        setShowDatePicker((prevState) => ({ ...prevState, [property]: false }));
      } else {
        setShowTimePicker((prevState) => ({ ...prevState, [property]: false }));
      }
    }
  };
  
  const formatDate = (date, time) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
      style={styles.fullScreenGradient}
    >
    <View style={styles.container}>
      {['propertyOne', 'propertyTwo'].map((property) => (
        <View key={property} style={styles.inputGroup}>
            <View style={styles.input}>
          <Text style={styles.label}>{property === 'propertyOne' ? "Ship's time of Departure" : "Ship's time of Arrival"}</Text>
          <TouchableOpacity
            onPress={() => setShowDatePicker({ ...showDatePicker, [property]: true })}
            style={styles.input}
          >
            <Text style={styles.label}>{formatDate(inputValues[`${property}Date`], inputValues[`${property}Time`])}</Text>
          </TouchableOpacity>
          {showDatePicker[property] && (
            <DateTimePicker
            value={inputValues[`${property}Date`]}
            mode="
          date"
          display="default"
          onChange={(event, selectedDate) => handleDateTimeChange(event, selectedDate, property, 'Date')}
          />
          )}
          <TouchableOpacity
            onPress={() => setShowTimePicker({ ...showTimePicker, [property]: true })}
            style={styles.input}
          >
           <Icon name="access-time" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.countdown}>{countdown[property]}</Text>
          </View>

          {showTimePicker[property] && (
            <DateTimePicker
            value={inputValues[`${property}Time`]}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, selectedTime) => handleDateTimeChange(event, selectedTime, property, 'Time')}
            />
          )}
         
        </View>
      ))}
    </View></LinearGradient>
  );
};

const styles = StyleSheet.create({
    fullScreenGradient: {
        flex: 1,  
      },
    container: {
      flex: 1,
      padding: 20,
      marginTop:90,
    },
    inputGroup: {
      marginBottom: 20,
    },
    label: {
      marginBottom: 5,
      fontWeight: 'bold',
      color:'black',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white', // Set background color to white for card appearance
        padding: 10,
        borderRadius: 10, // Optional: Adjust borderRadius for card-like appearance
        minHeight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        shadowColor: "#000", // Optional: Shadow for card elevation effect
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Android elevation
      },
    
    countdown: {
      marginTop: 5,
      fontWeight: 'bold',
      color:'red',
    },
  });
