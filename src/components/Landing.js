import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, PermissionsAndroid, ImageBackground, ActivityIndicator, ScrollView, RefreshControl } from "react-native";import Icon from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';

const Landing = ({ navigation }) => {
  const api_key = "4d4f689d9c7293aa4b580d2c231f2849";
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");
  const [country, setCountry] = useState("");
  const [dateInfo, setDateInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to provide weather information.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        getLocation();
      } else {
        console.log('Location permission denied');
        setLoading(false); // Location permission denied, stop loading
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const fetchWeatherData = async (latitude, longitude) => {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;
  
    try {
      let response = await fetch(weatherUrl);
      let data = await response.json();
      setTemperature(`${data.main.temp}°C`);
      setWindSpeed(`${data.wind.speed} km/hr`);
      setLocation(data.name);
      setCountry(data.sys.country); // Set country value
      setHumidity(`${data.main.humidity}%`);
      setLoading(false); // Data loaded successfully
      setRefreshing(false); // Set refreshing to false after data is loaded
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setLoading(false); // Error fetching data, stop loading
      setRefreshing(false); // Set refreshing to false in case of error
    }
  };
  

  const getCurrentDateInfo = () => {
  const updateDateTime = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    setDateInfo(formattedDate);
  };

  // Update time initially
  updateDateTime();

  // Update time every minute
  const intervalId = setInterval(updateDateTime, 60000);

  // Clean up interval on unmount
  return () => clearInterval(intervalId);
};


  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
        getCurrentDateInfo();
      },
      (error) => {
        if (error.code === 3) {
          console.error('Location request timed out. Please check your network connection and try again.');
        } else {
          console.error('Error getting location:', error);
        }
        setLoading(false); // Unable to get location or timeout, stop loading
      },
      { timeout: 300000 } // Increase timeout duration (in milliseconds)
    );
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
    }
  }, []);

  const handleGetStartedPress = () => {
    navigation.navigate('Login');
  };

  const handleRefresh = () => {
    setRefreshing(true); // Set refreshing to true to show the loading indicator
    getLocation(); // Trigger location fetch to refresh weather data
  };

  return (
    <ImageBackground 
      source={require('../assets/images/landing.jpg')} // Assuming your background image is stored in the assets directory
      style={styles.background}
    >
    <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          <View style={styles.weatherContainer}>
            <Image source={require('../assets/images/cloud.png')} style={styles.weatherIcon} />
            <Text style={styles.temperature}>{temperature}</Text>
            <Text style={styles.location}>📍{location}, {country}</Text>
            <Text style={styles.dateInfo}>{dateInfo}</Text>
            <View style={styles.dataContainer}>
              <View style={styles.element}>
                <Image source={require('../assets/images/humidity.png')} style={styles.icon} />
                <View style={styles.data}>
                  <Text style={styles.text}>{humidity}</Text>
                  <Text style={styles.text}>Humidity</Text>
                </View>
              </View>
              <View style={styles.element}>
                <Image source={require('../assets/images/wind.png')} style={styles.icon} />
                <View style={styles.data}>
                  <Text style={styles.text}>{windSpeed}</Text>
                  <Text style={styles.text}>Wind Speed</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        <TouchableOpacity style={styles.buttonContainer} onPress={handleGetStartedPress}>
          <Icon name="chevron-right" size={20} color="#fff" />
          <Icon name="chevron-right" size={20} color="#fff" />
          <Text style={styles.buttonText}>
            Get Started
          </Text>
        </TouchableOpacity>
     </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Add opacity to the background
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20, // Add margin to create space between loading and button
  },
  loadingText: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
  weatherContainer: {
    width: 300,
    height: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Background color with opacity
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'space-between', // Adjusted layout
    backdropFilter: 'blur(5px)', // Blurry effect
  },
  
  weatherIcon: {
    width: 70, // Increased size for better visibility
    height: 70, // Increased size for better visibility
    alignSelf: 'center', // Center the icon horizontally
  },
  temperature: {
    color: '#fff',
    fontSize: 26, //
    fontSize: 26, // Increased font size for emphasis
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
    marginBottom: 20, // Increased margin for spacing
  },
  location: {
    color: '#fff',
    fontSize: 20, // Adjusted font size
    fontWeight: 'bold',
    textAlign: 'center', // Center the text horizontally
    marginBottom: 10,
  },
  dateInfo: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center', // Center the text horizontally
    marginBottom: 20, // Increased margin for spacing
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Adjusted layout
    marginBottom: 20, // Increased margin for spacing
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  data: {
    marginLeft: 10, // Increased margin for spacing
  },
  text: {
    color: '#fff',
    fontSize: 16, // Adjusted font size
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '60%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default Landing;
