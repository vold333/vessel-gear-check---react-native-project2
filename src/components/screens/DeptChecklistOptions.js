// Import React Native components
import React,{ useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-radio-buttons-group';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { StyledButton } from './DefaultDeptChecklistOptions';

import {  useSelector,useDispatch } from 'react-redux';
import { setNextPath } from './actions/navigationActions';
import { setNavigationFromDeck } from './actions/navigationActions';
import { setOriginPath } from './actions/navigationActions';
import LinearGradient from 'react-native-linear-gradient';



import { useNavigation } from '@react-navigation/native';

/**************************************InfoBox****************************************/
const InfoBox = ({ labelText, path, origin }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setNavigationFromDeck(true));
    dispatch(setOriginPath(origin));
    navigation.navigate(path);
  };

  return (
   
   
      <TouchableOpacity style={styles10.infoBox} onPress={handleClick}>
       
          <Text style={styles10.infoText}>{labelText}</Text>
        
      </TouchableOpacity>
   
  );
};

const styles10 = StyleSheet.create({
  
 
  infoBox: {
    backgroundColor: '#F7F7F8', // Very light grey, almost white, for items
    paddingVertical: 15,
    paddingHorizontal: 25, // Generous padding for a spacious look
    marginBottom: 10,
    flexDirection: 'row', // Ready for potential icons or other elements
    justifyContent: 'center', // Center the content
    borderRadius: 10, // Soft, rounded corners for each item
    borderWidth: 1, // Slight border to distinguish items
    borderColor: '#E1E1E1', // Soft, light border color
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default InfoBox;
/**************************************DeckComponent******************************* */

export const DeckComponent = () => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
      style={styles11.fullScreenGradient}
    >
      <ScrollView contentContainerStyle={styles11.container}>
        <View style={styles11.listContainer}>
          {/* InfoBox components */}
          <InfoBox labelText="Documentation" path="Documentation" origin="Deck" />
          <InfoBox labelText="External hull & pre boarding" path="ExternalHullPreBoarding" origin="Deck" />
          <InfoBox labelText="ISM Code" path="IsmCode" origin="Deck" />
          <InfoBox labelText="Wheel house" path="WheelHouse" origin="Deck" />
          <InfoBox labelText="Radio" path="Radio" origin="Deck" />
          <InfoBox labelText="Common check" path="CommonCheck" origin="Deck" />
          <InfoBox labelText="Deck hours of rest & fatigue" path="DeckHoursRestFatigue" origin="Deck" />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles11 = StyleSheet.create({
  fullScreenGradient: {
    flex: 1, // Ensure LinearGradient fills the whole screen
  },
  container: {
    flexGrow: 1, // Corrected typo here, ensuring content can grow
  },
  listContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  // backButton styles are kept for potential future use
});
/**************************************EngineComponent******************************* */
export const EngineComponent = () => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
      style={styles12.fullScreenGradient}
    >
    <ScrollView contentContainerStyle={styles12.container}> 
    <View style={styles12.listContainer}>
      <InfoBox labelText="Engine Room checks" path="EngineRoom" origin="Engine" />
     </View>
    </ScrollView></LinearGradient>
  );
};

const styles12 = StyleSheet.create({
  fullScreenGradient: {
    flex: 1, // Ensure LinearGradient fills the whole screen
  },
  container: {
    flexGrow: 1, // Corrected typo here, ensuring content can grow
  },
  listContainer: {
    marginTop: 190,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  // backButton styles are kept for potential future use
});

/**************************************SafetyComponent******************************* */

export const SafetyComponent = () => {
  return (
    <LinearGradient
    colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
    style={styles13.fullScreenGradient}
  >
  <ScrollView contentContainerStyle={styles13.container}> 
  <View style={styles13.listContainer}>
      <InfoBox labelText="The Ship/Shore Safety Check" path="shore" origin="Safety" />
      <InfoBox labelText="Damage control plans check" path="damagecontrol" origin="Safety" />
      <InfoBox labelText="Fire protection system check" path="fireprotect" origin="Safety" />
      <InfoBox labelText="Survival Craft" path="survival" origin="Safety" />
      <InfoBox labelText="inert gas system (IGS)" path="igs" origin="Safety" />
      <InfoBox labelText="Crude Oil system" path="crude-oil" origin="Safety" />
      <InfoBox labelText="Bulk Liquid Chemicals" path="liquid-chemicals" origin="Safety"/>
      <InfoBox labelText="Bulk Liquefied Gases" path="liquefied-gases" origin="Safety" />
      
      {/*<TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
  </TouchableOpacity>*/}</View>
    </ScrollView></LinearGradient>
  );
};

const styles13 = StyleSheet.create({
  fullScreenGradient: {
    flex: 1, // Ensure LinearGradient fills the whole screen
  },
  container: {
    flexGrow: 1, // Corrected typo here, ensuring content can grow
  },
  listContainer: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});

/**************************************LogisticsComponent******************************* */

export const LogisticsComponent = () => {
  return (
    <LinearGradient
    colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
    style={styles14.fullScreenGradient}
  >
  <ScrollView contentContainerStyle={styles14.container}> 
  <View style={styles14.listContainer}>
      <InfoBox labelText="Container check" path="containerlogistics" origin="Logistics" />
      
      {/*<TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
  </TouchableOpacity>*/}</View>
    </ScrollView></LinearGradient>
  );
};

const styles14 = StyleSheet.create({
  fullScreenGradient: {
    flex: 1, // Ensure LinearGradient fills the whole screen
  },
  container: {
    flexGrow: 1, // Corrected typo here, ensuring content can grow
  },
  listContainer: {
    marginTop: 180,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});

/************************************************HospitalityComponent************************************************/
export const HospitalityComponent = () => {
  
  return (
    <LinearGradient
    colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
    style={styles16.fullScreenGradient}
  >
  <ScrollView contentContainerStyle={styles16.container}> 
  <View style={styles16.listContainer}>
      <InfoBox labelText="Accomodation/Catering" path="accomodationhospitality" origin="Hospitality" />
      
      {/*<TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
  </TouchableOpacity>*/}</View>
    </ScrollView></LinearGradient>
  );
};

const styles16 = StyleSheet.create({
  fullScreenGradient: {
    flex: 1, // Ensure LinearGradient fills the whole screen
  },
  container: {
    flexGrow: 1, // Corrected typo here, ensuring content can grow
  },
  listContainer: {
    marginTop: 180,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/*****if prob use this ****SubmissionComponent*****for modifydefault backend*************************************************** */
{/*export const SubmissionComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const nextPath = useSelector(state => state.navigation?.nextPath);
  const originPath = useSelector(state => state.navigation?.originPath);

  const handleSaveAndContinue = () => {
    if (nextPath) {
      navigation.navigate(nextPath);
      dispatch(setNextPath(null));
      dispatch(setNavigationFromDeck(false));
    } else {
      console.error("Next path not defined");
    }
  };

  const handleSaveAndFinish = () => {
    navigation.navigate(originPath || 'default-checklist');
    dispatch(setNextPath(null));
    dispatch(setOriginPath(''));
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
      style={styles22.fullScreenGradient}
    >
      <ScrollView contentContainerStyle={styles22.scrollViewContainer}>
        <View style={styles22.card}>
          <StyledButton1 title="Save & Finish" onPress={handleSaveAndFinish} />
          <StyledButton1 title="Save & Continue" onPress={handleSaveAndContinue} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const StyledButton1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles22.button}>
    <Text style={styles22.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles22 = StyleSheet.create({
  fullScreenGradient: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    flexDirection: 'column',
    
    justifyContent: 'space-around',
    width: '80%', // Adjust the width as necessary
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    marginBottom:20,
    paddingHorizontal: 30,
    borderRadius: 20,
    minWidth: 140, // Ensure a minimum width for both buttons
    height: 50, // Ensure a fixed height for uniformity
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});*/}
/****************************************ChecklistQuestionTemplateComponent******************************************** */

export const ChecklistQuestionTemplateComponent = ({ questions, onSubmit, text,onBack}) => {
    const [questionsState, setQuestionsState] = useState(questions.map(question => ({
      ...question,
      isEditable: false, // Initially, text inputs are not editable
      radioButtons: [
        { id: '1', label: 'Done', value: 'option1', selected: question.selectedValue === 'option1' },
        { id: '2', label: 'Not Yet Done', value: 'option2', selected: question.selectedValue === 'option2' },
        { id: '3', label: 'Not Applicable', value: 'option3', selected: question.selectedValue === 'option3' },
      ]
    })));
    // Add a state for input heights
const [inputHeights, setInputHeights] = useState({});
const [submitted, setSubmitted] = useState(false); // Track if form has been submitted


    const navigation = useNavigation();
    const dispatch = useDispatch();
   
    //const { backPath } = route.params || { backPath: 'DefaultBackPath' };
    // Retrieve the state to determine if navigation came from DeckComponent
    const { fromDeck } = useSelector((state) => state.navigation);

    // Function to handle editing a question
    const handleEditClick = (id) => {
        setQuestionsState(prevState =>
          prevState.map(question => ({
            ...question,
            isEditable: question.id === id ? !question.isEditable : question.isEditable,
          }))
        );
      };

    // Function to handle text input change
    const handleInputChange = (id, newText) => {
      setQuestionsState(prevState =>
        prevState.map(question => ({
          ...question,
          text: question.id === id ? newText : question.text,
          textError: question.id === id ? !newText.trim() : question.textError,
        }))
      );
    };
    

      const handleRadioChange = (questionId, selectedValue) => {
        setQuestionsState(prevState =>
          prevState.map(question => {
            if (question.id === questionId) {
              // Update only the radio buttons for the question that matches questionId
              const updatedRadioButtons = question.radioButtons.map(rb => ({
                ...rb,
                selected: rb.value === selectedValue,
              }));
              return {
                ...question,
                selectedValue: selectedValue, // Update the selected value for the matched question
                radioButtons: updatedRadioButtons, 
                radioError: false// Apply the updated radio buttons to the matched question
              };
            }
            return question; // Return other questions unchanged
          })
        );
      };
      // Validate form
  const validateForm = () => {
    const updatedQuestions = questionsState.map(question => ({
      ...question,
      textError: !question.text.trim(), // Set textError true if text is empty
      radioError: !question.selectedValue // Set radioError true if no radio option is selected
    }));
    setQuestionsState(updatedQuestions);

    return updatedQuestions.every(question => !question.textError && !question.radioError);
  };

  // Handle form submission
  const handleFormSubmit = (onSubmit) => {
    setSubmitted(true); // Mark form as submitted to show errors

    if (validateForm()) {
      onSubmit(); // Proceed with submission if validation passes
    }
  };
      
      

    // Function to handle deletion of a question
    const handleDeleteClick = (id) => {
        setQuestionsState(prevState => prevState.filter(question => question.id !== id));
      };

      /*const handleBack = () => {
        const navigateBackSteps = fromDeck ? 1 : 2;
        navigation.pop(navigateBackSteps);
        // Optionally reset the fromDeck state if needed
        if (fromDeck) {
          dispatch(setNavigationFromDeck(false));
        }
      };*/
     
      /*const handleBack = () => {
      
        if (history.length > 1) {
          // Logic to navigate back based on history
          const previousPath = history[history.length - 2];
          dispatch(clearHistory()); // Assuming you want to clear the last entry
          navigation.navigate(previousPath);
        } else {
          navigation.navigate('Deck');
        }
      };*/

      const handleBack = (onBack) => {
        if (fromDeck) {
          console.log("back button clicked is 1");
      
         
          navigation.pop(1);
          dispatch(setNavigationFromDeck(false)); // Optionally reset the fromDeck state
        } else {
        
         // console.log("back button clicked is 2");
         // navigation.pop(2);
         onBack();
         
        }
      };
      
      
      
      const handleContentSizeChange = (id, event) => {
        if (event && event.nativeEvent && event.nativeEvent.contentSize) {
          const { height } = event.nativeEvent.contentSize;
          setInputHeights(prevHeights => ({
            ...prevHeights,
            [id]: height // Update the height for the specific question's input
          }));
        }
      };
      
      
      
      const handleBlur = (id) => {
        const updatedQuestions = questionsState.map(question =>
          question.id === id ? { ...question,isEditable:false } : question
        );
        setQuestionsState(updatedQuestions);
      };

      return (
      <LinearGradient
        colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        style={styles2.fullScreenGradient}
      >
        <SafeAreaView style={styles2.safeArea}>
          <ScrollView style={styles2.container}>
          <View style={styles2.headerContainer}>
              <Text style={styles2.headerText}>{text}</Text>
            </View>
          
            
            {questionsState.map((question, index) => (
  <View key={index} style={styles2.questionContainer}>
    <View style={styles2.questionSubContainer}>
      <TextInput
        style={[styles2.input,question.textError && submitted ? styles2.errorInput : {}, question.isEditable ? styles2.editableInput : styles2.nonEditableInput,
          {height: Math.max(35, inputHeights[question.id] || 35)} ]}
        onChangeText={text => handleInputChange(question.id, text)}
        onBlur={() => handleBlur(question.id)}
        value={question.text}
        editable={question.isEditable}
        selectTextOnFocus={question.isEditable}
        multiline={true} // Enable multiline input
        onContentSizeChange={(event) => handleContentSizeChange(question.id, event)} // Adjust height based on content
        required
      />
      {question.textError && submitted && <Text style={styles2.errorText}>This field is required.</Text>}
      <TouchableOpacity onPress={() => handleEditClick(question.id)} style={styles2.iconButton}>
        <Icon name="edit" size={24} color="#000" />
      </TouchableOpacity>
    </View>
    <View style={styles2.radioOptionsContainer}>
      {question.radioButtons.map((radioButton, radioButtonIndex) => (
        <TouchableOpacity
          key={radioButton.id}
          onPress={() => handleRadioChange(question.id, radioButton.value)}
          style={styles2.radioTouchable}>
          <View style={styles2.radioButton}>
            {radioButton.selected && <View style={styles2.radioButtonInner} />}
          </View>
          <Text style={styles2.radiolabel}>{radioButton.label}</Text>
        </TouchableOpacity>
      ))}
       {question.radioError && submitted && <Text style={styles2.errorText}>Please select an option.</Text>}
    </View>
     {/* Position the delete icon at the bottom-right corner of the question container */}
     <View style={styles2.deleteIconPosition}>
              <TouchableOpacity onPress={() => handleDeleteClick(question.id)} style={styles2.deleteIconButton}>
                <Icon name="delete" size={24} color="#000" />
              </TouchableOpacity>
            </View>
  </View>
))}
           <View style={styles2.buttonContainer}>

<StyledButton title="Back" onPress={()=>handleBack(onBack)} backgroundColor="#e74c3c" />
<StyledButton title="Submit" onPress={()=>handleFormSubmit(onSubmit)} />

</View>
          </ScrollView>
        </SafeAreaView>
        </LinearGradient>
      );
    };
    

    const styles2 = StyleSheet.create({
      radiolabel:{
color:'black',
      },
      errorInput: { borderColor: 'red' },
  errorText: { color: 'red' },
      headerContainer: {
        backgroundColor: '#007AFF',//'#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD'
        borderRadius: 10,
        width:390,
        padding: 20,
        //marginLeft:85,
        marginTop: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        alignItems: 'center',
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        marginTop: 20, // Add top margin if needed
      },
      fullScreenGradient: {
        flex: 1,
      },
      deleteIconPosition: {
        position: 'absolute',
        right: 10,
        bottom: 10, // Adjust as necessary to position below the edit icon
      },
    
      deleteIconButton: {
        padding: 10,
      },
      // Add this new style for the container of radio options
radioOptionsContainer : {
  flexDirection: 'column',
  
  //alignItems: 'center',
 // justifyContent: 'flex-start', // Align items to the start of the container
},

// Adjust the existing radioButtonContainer style to not include justifyContent as it is now used for individual radio buttons
radioButtonContainer : {
 // flexDirection: 'column',
 // alignItems: 'center',
 
},


      safeArea: {
        flex: 1,
      },
      container: {
        flex: 1,
        padding: 10,
      //  backgroundColor: '#F0F0F5', // Light grey background for contrast
      },
      
      questionContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
      },
      questionSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      input: {
        flex: 1,
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        color:'black',
      },
      nonEditableInput: {
        borderWidth: 0,
        color:'black',
      },
      editableInput: {
        borderColor: '#ddd',
        color:'black',
      },
      iconButton: {
        padding: 10,
      },
      radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the start of the container
        marginBottom: 10, // Margin at the bottom for spacing between each radio button group
      },
      radioTouchable: {
        flexDirection: 'row',
        alignItems: 'center', // Ensures the icon and text are aligned on the same line
        marginRight: 20, // Right margin for spacing between radio button options
      },
      radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8, // Margin right for spacing between the radio button and its label
        marginTop:4,
      },
     
      radioButtonInner: {
        height: 10,
        width: 10,
        borderRadius: 6,
        backgroundColor: '#000',
      },
    });
    
/*********************************DocumentationComponent************************************************** */

  // Documentationquestions

const Documentationquestions = [
    { id: 1, text: 'Question 1  is the purpose of the documentation?', selectedValue: 'option1' },
    { id: 2, text: 'Question 2 What is the purpose of the documentation?', selectedValue: 'option1' },
    { id: 3, text: 'Question 3 What is the purpose of the documentation?', selectedValue: 'option1' },
    { id: 4, text: 'Question 4 What is the purpose of the documentation?', selectedValue: 'option1' },
    { id: 5, text: 'Question 5 What is the purpose of the documentation?', selectedValue: 'option1' },
    // Add more questions as needed
  ];
  
  export const DocumentationComponent = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    
  
    const handleSubmit = () => {
      dispatch(setNextPath('ExternalHullPreBoarding'));// Set the next path
    
      navigation.navigate('Submission');
    };
    const handb=()=>{
      navigation.navigate('Deck');
    }
  
    return (
      <View style={styles3.container}>
        <ChecklistQuestionTemplateComponent questions={Documentationquestions} text="Documentation" onSubmit={handleSubmit} onBack={handb} />
      </View>
    );
  };
  

  const styles3=StyleSheet.create({
    container:{flex:1}
  });

/***************************External_hull_pre_boardingComponent******************************************* */

 // External_hull_pre_boardingquestions

 const External_hull_pre_boardingquestions = [
  { id: 1, text: 'Question 1 What is the purpose of the External_hull_pre_boarding?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 What is the purpose of the External_hull_pre_boarding?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 What is the purpose of the External_hull_pre_boarding?', selectedValue: 'option1' },
  { id: 4, text: 'Question 4 What is the purpose of the External_hull_pre_boarding?', selectedValue: 'option1' },
  { id: 5, text: 'Question 5 What is the purpose of the External_hull_pre_boarding?', selectedValue: 'option1' },
  // Add more questions as needed
];

export const External_hull_pre_boardingComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setNextPath('IsmCode'));// Set the next path
    //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
   
    navigation.navigate('Submission'); // Navigate to the submission component
    
  // Navigate to submission component as before
  };
  const handb=()=>{
    navigation.navigate('Documentation');
  }

  return (
    <View style={styles4.container}>
      
      <ChecklistQuestionTemplateComponent questions={External_hull_pre_boardingquestions} text="External Hull Pre Boarding" onSubmit={handleSubmit} onBack={handb} />
    </View>
  );
};

const styles4=StyleSheet.create({
  container:{flex:1}
});

/***************************ISM_CodeComponent******************************************* */

 // ISM_Codequestions

 const ISM_Codequestions = [
  { id: 1, text: 'Question 1 What is the purpose of the ISM_Code?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 What is the purpose of the ISM_Code?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 What is the purpose of the ISM_Code?', selectedValue: 'option1' },
  { id: 4, text: 'Question 4 What is the purpose of the ISM_Code?', selectedValue: 'option1' },
  { id: 5, text: 'Question 5 What is the purpose of the ISM_Code?', selectedValue: 'option1' },
  // Add more questions as needed
];

export const ISM_CodeComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setNextPath('WheelHouse'));// Set the next path
    //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
    navigation.navigate('Submission'); // Navigate to the submission component
    
  // Navigate to submission component as before
  };
  const handb=()=>{
    navigation.navigate('ExternalHullPreBoarding');
  }

  return (
    <View style={styles5.container}>
      
      <ChecklistQuestionTemplateComponent questions={ISM_Codequestions} text="ISM Code" onSubmit={handleSubmit}  onBack={handb}/>
    </View>
  );
};

const styles5=StyleSheet.create({
  container:{flex:1}
});

/***************************Wheel_houseComponent******************************************* */

 // Wheel_housequestions

 const Wheel_housequestions = [
  { id: 1, text: 'Question 1 What is the purpose of the Wheel_house?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 What is the purpose of the Wheel_house?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 What is the purpose of the Wheel_house?', selectedValue: 'option1' },
  { id: 4, text: 'Question 4 What is the purpose of the Wheel_house?', selectedValue: 'option1' },
  { id: 5, text: 'Question 5 What is the purpose of the Wheel_house?', selectedValue: 'option1' },
  // Add more questions as needed
];

export const Wheel_houseComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setNextPath('Radio'));// Set the next path
    //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
    navigation.navigate('Submission'); // Navigate to the submission component
    
  // Navigate to submission component as before
  };
  const handb=()=>{
    navigation.navigate('IsmCode');
  }

  return (
    <View style={styles6.container}>
      
      <ChecklistQuestionTemplateComponent questions={Wheel_housequestions} text="Wheel House" onSubmit={handleSubmit} onBack={handb}/>
    </View>
  );
};

const styles6=StyleSheet.create({
  container:{flex:1}
});

/***************************RadioComponent******************************************* */

 // Radioquestions

 const Radioquestions = [
  { id: 1, text: 'Question 1 What is the purpose of the Radio?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 What is the purpose of the Radio?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 What is the purpose of the Radio?', selectedValue: 'option1' },
  { id: 4, text: 'Question 4 What is the purpose of the Radio?', selectedValue: 'option1' },
  { id: 5, text: 'Question 5 What is the purpose of the Radio?', selectedValue: 'option1' },
  // Add more questions as needed
];

export const RadioComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setNextPath('CommonCheck'));// Set the next path
    //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
    navigation.navigate('Submission'); // Navigate to the submission component
    
  // Navigate to submission component as before
  };
  const handb=()=>{
    navigation.navigate('WheelHouse');
  }

  return (
    <View style={styles7.container}>
      
      <ChecklistQuestionTemplateComponent questions={Radioquestions} text="Radio" onSubmit={handleSubmit} onBack={handb} />
    </View>
  );
};

const styles7=StyleSheet.create({
  container:{flex:1}
});

/***************************Common_checkComponent******************************************* */

 // Common_checkquestions

 const Common_checkquestions = [
  { id: 1, text: 'Quesiton 1 What is the purpose of the Common_check?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 What is the purpose of the Common_check?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3What is the purpose of the Common_check?', selectedValue: 'option1' },
  { id: 4, text: 'Question 4 What is the purpose of the Common_check?', selectedValue: 'option1' },
  { id: 5, text: 'Question 5 What is the purpose of the Common_check?', selectedValue: 'option1' },
  // Add more questions as needed
];

export const Common_checkComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setNextPath('DeckHoursRestFatigue'));// Set the next path
    //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
    navigation.navigate('Submission'); // Navigate to the submission component
    
  // Navigate to submission component as before
  };
  const handb=()=>{
    navigation.navigate('Radio');
  }

  return (
    <View style={styles8.container}>
      
      <ChecklistQuestionTemplateComponent questions={Common_checkquestions} text="Common Check" onSubmit={handleSubmit} onBack={handb} />
    </View>
  );
};

const styles8=StyleSheet.create({
  container:{flex:1}
});


/***************************Deck_hours_of_rest_&_fatigueComponent******************************************* */

 // Deck_hours_of_rest_&_fatiguequestions

 const Deck_hours_of_rest_fatiguequestions = [
  { id: 1, text: 'Quesiton 1 What is the purpose of the Deck_hours_of_rest_&_fatigue?', selectedValue: 'option1' },
  { id: 2, text: 'Quesiton 2 What is the purpose of the Deck_hours_of_rest_&_fatigue?', selectedValue: 'option1' },
  { id: 3, text: 'Quesiton 3 What is the purpose of the Deck_hours_of_rest_&_fatigue?', selectedValue: 'option1' },
  { id: 4, text: 'Quesiton 4 What is the purpose of the Deck_hours_of_rest_&_fatigue?', selectedValue: 'option1' },
  { id: 5, text: 'Quesiton 5 What is the purpose of the Deck_hours_of_rest_&_fatigue?', selectedValue: 'option1' },
  // Add more questions as needed
];

export const Deck_hours_of_rest_fatigueComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setNextPath('ModifyDefaultChecklist'));// Set the next path
    //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
    navigation.navigate('Submission'); // Navigate to the submission component
    
  // Navigate to submission component as before
  };
  const handb=()=>{
    navigation.navigate('Common_check');
  }

  return (
    <View style={styles9.container}>
      
      <ChecklistQuestionTemplateComponent questions={Deck_hours_of_rest_fatiguequestions} text="Deck Hours of Rest" onSubmit={handleSubmit} onBack={handb} />
    </View>
  );
};

const styles9=StyleSheet.create({
  container:{flex:1}
});

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/***********************************************EngineRoom*****************************************/
  
//Engine Questions Structure
const EngineQuestions = [
  { id: 1, text: 'Question 1 for Engine' ,selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for Engine', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for Engine', selectedValue: 'option1' },
  // Add more questions as needed
];

export const EngineRoom = () => {
  const navigation = useNavigation();
 const dispatch = useDispatch();
  //const navigate = navigate();

  const handleSubmit = () => {
    dispatch(setNextPath('ModifyDefaultChecklist'));// Set the next path
    //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
    navigation.navigate('Submission'); // Navigate to the submission component
    
  // Navigate to submission component as before
  };
  return <ChecklistQuestionTemplateComponent questions={EngineQuestions} text="Engine" onSubmit={handleSubmit}    />;
};

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/


/***********************************************ShoreSafety*****************************************/

//ShoreSafety Questions Structure
const ShoreSafetyQuestions = [
  { id: 1, text: 'Question 1 for ShoreSafety', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for ShoreSafety', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for ShoreSafety', selectedValue: 'option1' },
  // Add more questions as needed
];

  export const ShoreSafety=()=> {
    const navigation = useNavigation();
 const dispatch = useDispatch();
  //const navigate = navigate();

  const handleSubmit = () => {
    dispatch(setNextPath('fireprotect'));// Set the next path
    //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
    navigation.navigate('Submission'); // Navigate to the submission component
    
  // Navigate to submission component as before
  };
  const handb=()=>{
    navigation.navigate('Safety');
  }


    return <ChecklistQuestionTemplateComponent questions={ShoreSafetyQuestions} text="Shore Safety" onSubmit={handleSubmit} onBack={handb}  />;
  }
/***********************************************DamageControlSafety*****************************************/
  //DamageControlSafety Questions Structure
const DamageControlSafetyQuestions = [
  { id: 1, text: 'Question 1 for DamageControlSafety', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for DamageControlSafety', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for DamageControlSafety', selectedValue: 'option1' },
  // Add more questions as needed
];

export const DamageControlSafety=()=> {
  const navigation = useNavigation();
  const dispatch = useDispatch();
   //const navigate = navigate();
 
   const handleSubmit = () => {
     dispatch(setNextPath('survival'));// Set the next path
     //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
     navigation.navigate('Submission'); // Navigate to the submission component
     
   // Navigate to submission component as before
   };
   const handb=()=>{
    navigation.navigate('fireprotect');
  }

    return <ChecklistQuestionTemplateComponent questions={DamageControlSafetyQuestions} onSubmit={handleSubmit} onBack={handb} text='Damage Control' />;
  }
/***********************************************FireSafety*****************************************/

//FireSafety Questions Structure
const FireSafetyQuestions = [
  { id: 1, text: 'Question 1 for FireSafety?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for FireSafety?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for FireSafety?', selectedValue: 'option1' },
  // Add more questions as needed
];

  export const FireSafety=()=> {
    const navigation = useNavigation();
  const dispatch = useDispatch();
   //const navigate = navigate();
 
   const handleSubmit = () => {
     dispatch(setNextPath('damagecontrol'));// Set the next path
     //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
     navigation.navigate('Submission'); // Navigate to the submission component
     
   // Navigate to submission component as before
   };
   const handb=()=>{
    navigation.navigate('shore');
  }

    return <ChecklistQuestionTemplateComponent questions={FireSafetyQuestions} onSubmit={handleSubmit} onBack={handb} text='Fire Safety' />;
  }
/***********************************************SurvivalSafety*****************************************/
//SurvivalSafety Questions Structure
const SurvivalSafetyQuestions = [
  { id: 1, text: 'Question 1 for SurvivalSafety?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for SurvivalSafety?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for SurvivalSafety?', selectedValue: 'option1' },
  // Add more questions as needed
];

  export const SurvivalSafety=()=> {
    const navigation = useNavigation();
    const dispatch = useDispatch();
     //const navigate = navigate();
   
     const handleSubmit = () => {
       dispatch(setNextPath('igs'));// Set the next path
       //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
       navigation.navigate('Submission'); // Navigate to the submission component
       
     // Navigate to submission component as before
     };
     const handb=()=>{
      navigation.navigate('damagecontrol');
    }
  
    return <ChecklistQuestionTemplateComponent questions={SurvivalSafetyQuestions} onSubmit={handleSubmit} onBack={handb} text='Survival Safety'  />;
  }
/***********************************************IGSSafety*****************************************/

//IGSSafety Questions Structure
const IGSSafetyQuestions = [
  { id: 1, text: 'Question 1 for IGSSafety?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for IGSSafety?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for IGSSafety?', selectedValue: 'option1' },
  // Add more questions as needed
];

  export const IGSSafety=()=> {
    const navigation = useNavigation();
    const dispatch = useDispatch();
     //const navigate = navigate();
   
     const handleSubmit = () => {
       dispatch(setNextPath('crude-oil'));// Set the next path
       //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
       navigation.navigate('Submission'); // Navigate to the submission component
       
     // Navigate to submission component as before
     };
     const handb=()=>{
      navigation.navigate('survival');
    }
  
    return <ChecklistQuestionTemplateComponent questions={IGSSafetyQuestions} onSubmit={handleSubmit} onBack={handb} text='IGS Safety' />;
  }
/***********************************************CrudeOilSafety*****************************************/

//CrudeOilSafety Questions Structure
const CrudeOilSafetyQuestions = [
  { id: 1, text: 'Question 1 for CrudeOilSafety?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for CrudeOilSafety?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for CrudeOilSafety?', selectedValue: 'option1' },
  // Add more questions as needed
];

  export const CrudeOilSafety=()=> {
    const navigation = useNavigation();
    const dispatch = useDispatch();
     //const navigate = navigate();
   
     const handleSubmit = () => {
       dispatch(setNextPath('liquid-chemicals'));// Set the next path
       //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
       navigation.navigate('Submission'); // Navigate to the submission component
       
     // Navigate to submission component as before
     };
     const handb=()=>{
      navigation.navigate('igs');
    }
  
    return <ChecklistQuestionTemplateComponent questions={CrudeOilSafetyQuestions} onSubmit={handleSubmit} onBack={handb} text='Crude Oil Safety' />;
  }
/***********************************************LiquiedChemicalsSafety*****************************************/

//LiquiedChemicals Questions Structure
const LiquiedChemicalsQuestions = [
  { id: 1, text: 'Question 1 for LiquiedChemicals?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for LiquiedChemicals?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for LiquiedChemicals?', selectedValue: 'option1' },
  // Add more questions as needed
];

export const LiquiedChemicalsSafety=()=> {
  const navigation = useNavigation();
  const dispatch = useDispatch();
   //const navigate = navigate();
 
   const handleSubmit = () => {
     dispatch(setNextPath('liquefied-gases'));// Set the next path
     //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
     navigation.navigate('Submission'); // Navigate to the submission component
     
   // Navigate to submission component as before
   };
   const handb=()=>{
    navigation.navigate('crude-oil');
  }
    return <ChecklistQuestionTemplateComponent questions={LiquiedChemicalsQuestions} onSubmit={handleSubmit} onBack={handb} text='Liquied Chemicals Safety' />;
  }

/***********************************************LiquefiedGasSafety*****************************************/

//LiquefiedGasSafety Questions Structure
const LiquefiedGasSafetyQuestions = [
  { id: 1, text: 'Question 1 for LiquefiedGasSafety?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for LiquefiedGasSafety?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for LiquefiedGasSafety?', selectedValue: 'option1' },
  // Add more questions as needed
];

  export const LiquefiedGasSafety=()=> {
    const navigation = useNavigation();
  const dispatch = useDispatch();
   //const navigate = navigate();
 
   const handleSubmit = () => {
     dispatch(setNextPath('ModifyDefaultChecklist'));// Set the next path
     //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
     navigation.navigate('Submission'); // Navigate to the submission component
     
   // Navigate to submission component as before
   };
   const handb=()=>{
    navigation.navigate('liquid-chemicals');
  }

    
    return <ChecklistQuestionTemplateComponent questions={LiquefiedGasSafetyQuestions} onSubmit={handleSubmit} onBack={handb} text='Liquefied Gas Safety' />;
  }
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/


/***********************************************ContainerLogistics*****************************************/

//ContainerLogistics Questions Structure
const ContainerLogisticsQuestions = [
  { id: 1, text: 'Question 1 for ContainerLogistics?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for ContainerLogistics?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for ContainerLogistics?', selectedValue: 'option1' },
  // Add more questions as needed
];


  export const ContainerLogistics=()=> {
    const navigation = useNavigation();
  const dispatch = useDispatch();
   //const navigate = navigate();
 
   const handleSubmit = () => {
     dispatch(setNextPath('ModifyDefaultChecklist'));// Set the next path
     //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
     navigation.navigate('Submission'); // Navigate to the submission component
     
   // Navigate to submission component as before
   };
  

    return <ChecklistQuestionTemplateComponent questions={ContainerLogisticsQuestions} text="Container Logistics" onSubmit={handleSubmit}  />;
  }

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/***********************************************AccomodationHosipitality*****************************************/
//AccomodationHosipitality Questions Structure
const AccomodationHosipitalityQuestions = [
  { id: 1, text: 'Question 1 for AccomodationHosipitality?', selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for AccomodationHosipitality?', selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for AccomodationHosipitality?', selectedValue: 'option1' },
  // Add more questions as needed
];

  export const AccomodationHospitality=()=> {
    const navigation = useNavigation();
    const dispatch = useDispatch();
     //const navigate = navigate();
   
     const handleSubmit = () => {
       dispatch(setNextPath('ModifyDefaultChecklist'));// Set the next path
       //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
       navigation.navigate('Submission'); // Navigate to the submission component
       
     // Navigate to submission component as before
     };

    return <ChecklistQuestionTemplateComponent questions={AccomodationHosipitalityQuestions} text="Accomodation Hosipitality" onSubmit={handleSubmit} />;
  }
  
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

  
 
