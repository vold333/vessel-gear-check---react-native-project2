import {React,useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView ,TouchableOpacity, TextInput,SafeAreaView} from 'react-native';
import { ChecklistMain } from './ChecklistScreen';
import imageUrl from './i1.png'; // Make sure to import your image correctly for React Native
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


import Icon from 'react-native-vector-icons/MaterialIcons';


 


const NewChecklist = ({ route }) => {
    const [inputValue, setInputValue] = useState("");
    const [inputTouched, setInputTouched] = useState(false); // State to track if the input has been touched

    const navigation = useNavigation();
    const isDepartmentScreen = route.name === "NewDepartment";
    const placeholderText = route.params?.placeholderText || (isDepartmentScreen ? "Add a new department" : "Add a new checklist");

    // Retrieve departmentInput if passed from NewDepartment to NewChecklist
    const { departmentInput } = route.params || {};

   // Adjusted function to navigate based on the current route
   const handleAddPress = () => {
    setInputTouched(true); // Mark input as touched to trigger validation
    if (!inputValue.trim()) {
      // Don't proceed if inputValue is empty or contains only whitespace
      return;
    }
    if (isDepartmentScreen) {
      // Navigate to 'NewChecklist' with department input, if applicable
      navigation.navigate('NewChecklist', { departmentInput: inputValue });
    } else {
      // Navigate to 'AddNewItemScreen' with checklist input, if on NewChecklist route
      navigation.navigate('AddNewItem',  {
            departmentInput: departmentInput, // Pass existing departmentInput
            checklistInput: inputValue // Pass new checklistInput
        });
    }
  };
  

  
// Define your buttons array as before
const addButton = [
    { text: "ADD",onClick:handleAddPress}, // Adjust paths for React Navigation
  
  ];

    // Wrap the JSX in a function that returns it
    const inputText = () => (
        <View style={styles.inputContainer}>
            <TextInput
                value={inputValue}
                onChangeText={setInputValue} // Update state with input text
                onBlur={() => setInputTouched(true)} // Mark input as touched when it loses focus
                placeholder={placeholderText}
                style={styles.input}
            />
             {inputTouched && !inputValue.trim() && (
            <Text style={styles.errorText}>This field is required.</Text> // Display error text if input is touched and empty
          )}
        </View>
    );

    return (
        <LinearGradient
            colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            style={styles.fullScreenGradient}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <ChecklistMain
                    content={
                        <View style={styles.imageContainer}>
                            <Image source={imageUrl} style={styles.image} />
                        </View>
                    }
                    buttons={addButton}
                    
                    inputs={inputText} // Now passing a function that returns JSX
                />
                 
            </ScrollView>
        </LinearGradient>
    );
};


const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    marginTop: 5, // Adjust as necessary
  },
    inputContainer: {
        width: '80%', // Adjust width as needed
        marginTop: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd', // Adjust borderColor as needed
        padding: 10,
        borderRadius: 5, // Adjust borderRadius as needed
        fontSize: 16,
      },
  fullScreenGradient: {
    flex: 1,  
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    width: '100%',
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Example background color for the title container
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageContainer: {
    width: 350,
    height: 290,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adjust according to your preference
  },
});

export default NewChecklist;


export const AddNewItemScreen = ({ route }) => {
  const navigation = useNavigation();
    const { departmentInput, checklistInput } = route.params || {};
    const [cards, setCards] =  useState([{ id: 1, inputValue: '', selectedStatus: null, inputError: false, radioError: false }]);
    let nextCardId = 2; // Initialize with 2 since the first card ID is 1
  
    const handleAddCard = () => {
      setCards([...cards, { id: nextCardId++, inputValue: '', selectedStatus: null }]);
    };
    const handleDeleteCard = (id) => {
      const newCards = cards.filter(card => card.id !== id);
      setCards(newCards);
    };

    const handleDone = () => {
      let isValid = true;
      const newCards = cards.map(card => {
        const inputError = !card.inputValue;
        const radioError = !card.selectedStatus;
        isValid = isValid && !inputError && !radioError;
        return { ...card, inputError, radioError };
      });
    
      if (!isValid) {
        setCards(newCards);
        // Stop submission if not valid
        return;
      }
    
      // Proceed with submission if valid
      console.log("Submitting data to the EditItemScreen from AddNewItemScreen", cards);
      navigation.navigate('EditItemsScreen', { departmentInput, checklistInput, cards });
    };

    const handleInputChange = (text, id) => {
      const newCards = cards.map(card => card.id === id ? { ...card, inputValue: text } : card);
      setCards(newCards);
    };
    const handleStatusChange = (status, id) => {
      const newCards = cards.map(card => card.id === id ? { ...card, selectedStatus: status } : card);
      setCards(newCards);
    };
  
    return (
        <LinearGradient
        colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        style={styles1.fullScreenGradient}
      >
        <ScrollView contentContainerStyle={styles1.container}>
         {/* Conditionally display inputs if they exist */}
         {(departmentInput || checklistInput) && (
                    <View style={styles1.card}>
                        {departmentInput && <Text style={styles1.text2}>{departmentInput}</Text>}
                        <Text style={styles1.text2}>/</Text>
                        {checklistInput && <Text style={styles1.text1}>{checklistInput}</Text>}
                    </View>
                )}
        {cards.map((card, index) => (
  <CardItem
    key={card.id}
    id={card.id}
    inputValue={card.inputValue}
    onChangeInput={(text) => handleInputChange(text, card.id)}
    onAdd={handleAddCard}
    onDelete={() => handleDeleteCard(card.id)}
    selectedStatus={card.selectedStatus}
    onStatusChange={(status) => handleStatusChange(status, card.id)}
    inputError={card.inputError}
  radioError={card.radioError}
  />
))}


<TouchableOpacity onPress={handleDone} style={styles1.doneButton}>
            <Text style={styles1.doneButtonText}>Done</Text>
          </TouchableOpacity>
      </ScrollView>
      </LinearGradient>
    );
  };
  
  
  const styles1 = StyleSheet.create({
    doneButton: {
      padding: 10,
      backgroundColor: '#e86100', // Example color
      borderRadius: 75,
      width:150,
      alignSelf: 'center',
      marginTop: 10,
  },
  doneButtonText: {
      color: 'white', // Example text color
      fontSize: 16,
      textAlign:'center'
  },
    fullScreenGradient: {
        flex: 1, // Ensure LinearGradient fills the whole screen
      },
      text1:{
        color:'blue',
        fontSize:16,
        textTransform:'capitalize',
      
      },
      text2:{
       
        fontSize:16,
        textTransform:'capitalize'
      },
    container: {
        flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      borderTopWidth:10,
      borderTopColor:'#e86100',
        padding: 10,
        marginTop:20,
        marginBottom: 10,
        marginLeft:40,
        backgroundColor: 'white',
       // width: '90%', // Adjust as necessary
        borderRadius: 8, // Rounded corners for the card
     //   alignItems: 'center', // Center the text
     alignSelf: 'flex-start',
        flexDirection:'row',
    },
  });


 export const CardItem = ({inputValue, onChangeInput, onAdd, onDelete, isEditingScreen = false, selectedStatus, onStatusChange = () => {},style,inputError,
 radioError  }) => {
   // const [selectedStatus, setSelectedStatus] = useState(null);
    const [isEditing, setIsEditing] = useState(!isEditingScreen); // Assume editing by default if not on editing screen
  
    return (
      <View style={[styles2.card]}>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <TextInput
          style={[styles2.input, !isEditing && styles2.inputDisabled]}
          value={inputValue}
          onChangeText={onChangeInput}
          placeholder="Type here..."
          editable={isEditing}
          onBlur={() => isEditingScreen && setIsEditing(false)} // Only revert to non-editable on editing screen
        />
       

         {isEditingScreen && (
            <TouchableOpacity onPress={() => setIsEditing(true)}>
              <Icon name="edit" size={24} color="black" />
            </TouchableOpacity>
          )}
           {!isEditingScreen && (
            <TouchableOpacity onPress={onAdd}>
              <Icon name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
        {inputError && <Text style={styles2.errorMessage}>This field is required.</Text>}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <View style={styles2.radioContainer}>
        {["Done", "Not Done", "Not Applicable"].map((status) => (
          <TouchableOpacity
            key={status}
            onPress={() => onStatusChange(status)}
            style={styles2.radioButtonContainer}
          >
            <View style={[
              styles2.radioButton,
              selectedStatus === status && styles2.radioButtonSelected,
            ]} />
            <Text>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>
     
      <TouchableOpacity onPress={onDelete}>
            <Icon name="delete" size={24} color="black" />
          </TouchableOpacity>
          </View>
          {radioError && <Text style={styles2.errorMessage}>Please select an option.</Text>}
        
      </View>
    );
  };
  const styles2 = StyleSheet.create({
    errorMessage: {
      color: 'red',
      fontSize: 14,
      marginLeft: 10, // Adjust as needed
      marginBottom:15,
    },
    inputDisabled: {
      borderWidth: 0,
    },
    card: {
      
      borderLeftWidth:10,
      borderLeftColor:'#e86100',
     maxWidth:'90%',
      padding: 10,
      backgroundColor:'white',
      marginBottom: 10,
      borderRadius: 8, // Rounded corners for the card
    },
    input: {
      flex: 1, // Make input flexible to take up available space
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 8,
      marginBottom: 15,
      borderRadius: 5, // Rounded corners for the input
    },
    radioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10, // Added margin-bottom for spacing
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15, // Increased spacing between radio buttons
    },
    radioButton: {
      height: 20,
      width: 20,
      marginRight: 8,
      borderRadius: 10, // Perfect circle
      borderWidth: 1,
      borderColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioButtonSelected: {
      backgroundColor: '#000', // Black dot for selected
    },
    radioLabel: {
      fontSize: 16,
    },
    
  });
  



  export const EditItemsScreen = ({ route }) => {
    const navigation=useNavigation();
    const { departmentInput, checklistInput, cards: initialCards } = route.params || {};
    
  // Include inputError and radioError flags when initializing state
  const [cards, setCards] = useState(initialCards.map(card => ({
    ...card,
    inputError: false,
    radioError: false
  })));

  const handleInputChange = (text, index) => {
    const newCards = cards.map((card, idx) =>
      idx === index ? { ...card, inputValue: text, inputError: !text } : card
    );
    setCards(newCards);
  };

 
  const handleStatusChange = (status, index) => {
    const newCards = cards.map((card, idx) =>
      idx === index ? { ...card, selectedStatus: status, radioError: false } : card
    );
    setCards(newCards);
  };

  const handleDeleteCard = (index) => {
    const newCards = cards.filter((_, idx) => idx !== index);
    setCards(newCards);
  };

  const handleSubmit = () => {
    let isValid = true;
    const newCards = cards.map(card => {
      const inputError = !card.inputValue;
      const radioError = !card.selectedStatus;
      isValid = isValid && !inputError && !radioError;
      return { ...card, inputError, radioError };
    });

    if (!isValid) {
      setCards(newCards);
      return; // Stop the submission if any validation fails
    }

    // If everything is valid, proceed with your submission logic
    console.log("Submitting data to the backend", cards);
    navigation.navigate('NewDepartment'); // Navigate or submit data as needed
  };
    return (
      <LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
      style={styles1.fullScreenGradient}
    >
        <ScrollView contentContainerStyle={styles3.container}>
            <View>
                {/* UI for displaying departmentInput and checklistInput, similar to AddNewItemScreen */}
                {/* Map through cards to display them */}
                {(departmentInput || checklistInput) && (
                    <View style={styles3.card1}>
                        {departmentInput && <Text style={styles1.text2} >{departmentInput}</Text>}
                        <Text style={styles1.text2}>/</Text>
                        {checklistInput && <Text style={styles1.text1}>{checklistInput}</Text>}
                    </View>
                )}
            {cards.map((card, index) => (
  <CardItem
            style={styles3.card}
    key={index}
    inputValue={card.inputValue || ''}
    onChangeInput={(text) => handleInputChange(text, index)}
    onDelete={() => handleDeleteCard(index)}
    isEditingScreen={true} // or false, based on the screen
    selectedStatus={card.selectedStatus}
    onStatusChange={(status) => handleStatusChange(status, index)}
    inputError={card.inputError}
    radioError={card.radioError}
  />
))}

<TouchableOpacity onPress={handleSubmit} style={styles3.submitButton}>
          <Text style={styles3.submitButtonText}>Submit</Text>
        </TouchableOpacity>
            </View>
        </ScrollView>
        </LinearGradient>
    );
};
  
  
const styles3 = StyleSheet.create({
  container: {
    flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
  fullScreenGradient: {
    flex: 1, // Ensure LinearGradient fills the whole screen
  },
  card1: {
    borderTopWidth:10,
    borderTopColor:'#e86100',
    padding: 10,
    marginTop:20,
    marginBottom: 10,
    backgroundColor: 'white',
    width: '90%', // Adjust as necessary
    borderRadius: 8, // Rounded corners for the card
    alignItems: 'center', // Center the text
    flexDirection:'row',
},
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    width: '90%', // Adjust as necessary
    borderRadius: 8, // Rounded corners for the card
    alignSelf: 'center', // Center the card in the container
},
inputContainer: {
    width: '80%',
    marginTop: 20,
    alignSelf: 'center',
},
input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
},

// Styles for the Submit button
submitButton: {
    marginVertical: 20,
    backgroundColor: '#e86100', // Adjust the color as needed
    padding: 15,
    borderRadius: 75,
    width:150,
    alignSelf: 'center',
},
submitButtonText: {
    color: 'white', // Adjust the text color as needed
    fontSize: 16,
    textAlign: 'center', // Ensures text is centered within the button
},

// Styles for the radio buttons and their container
radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Added margin-bottom for spacing
},
radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15, // Increased spacing between radio buttons
},
radioButton: {
    height: 20,
    width: 20,
    marginRight: 8,
    borderRadius: 10, // Perfect circle
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
},
radioButtonSelected: {
    backgroundColor: '#000', // Black dot for selected
},
radioLabel: {
    fontSize: 16,
},
});


 