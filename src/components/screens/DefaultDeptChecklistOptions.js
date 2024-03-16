
// Import React Native components
import React,{ useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-radio-buttons-group';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import {  useSelector,useDispatch } from 'react-redux';
import { setNextPath } from './actions/navigationActions';
import { setNavigationFromDeck } from './actions/navigationActions';
import { setOriginPath } from './actions/navigationActions';



import { useNavigation } from '@react-navigation/native';

/*************************************************InfoBox******************************************************************************** */ 

const InfoBox = ({ labelText, path, origin }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setNavigationFromDeck(true));
    dispatch(setOriginPath(origin));
    navigation.navigate(path);
  };

  return (
   
   
      <TouchableOpacity style={styles.infoBox} onPress={handleClick}>
       
          <Text style={styles.infoText}>{labelText}</Text>
        
      </TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
  
 
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
/*************************************************DeckComponent********************************************/
export const DefaultDeckComponent = () => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
      style={styles1.fullScreenGradient}
    >
      <ScrollView contentContainerStyle={styles1.container}>
        <View style={styles1.listContainer}>
          {/* InfoBox components */}
          <InfoBox labelText="Documentation" path="DefaultDocumentation" origin="DefaultDeck" />
          <InfoBox labelText="External hull & pre boarding" path="DefaultExternalHullPreBoarding" origin="DefaultDeck" />
          <InfoBox labelText="ISM Code" path="DefaultIsmCode" origin="DefaultDeck" />
          <InfoBox labelText="Wheel house" path="DefaultWheelHouse" origin="DefaultDeck" />
          <InfoBox labelText="Radio" path="DefaultRadio" origin="DefaultDeck" />
          <InfoBox labelText="Common check" path="DefaultCommonCheck" origin="DefaultDeck" />
          <InfoBox labelText="Deck hours of rest & fatigue" path="DefaultDeckHoursRestFatigue" origin="DefaultDeck" />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles1 = StyleSheet.create({
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
/***********************************************EngineComponent*************************************************/
export const DefaultEngineComponent = () => {
  //const navigation = useNavigation();

  //const handleBack = () => {
   // navigation.navigate('PreDeparture'); // Adjust this to your actual checklist route name
  //};

  return (
    <LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
      style={styles2.fullScreenGradient}
    >
    <ScrollView contentContainerStyle={styles2.container}> 
    <View style={styles2.listContainer}>
      <InfoBox labelText="Engine Room checks" path="DefaultEngineRoomCheck" origin="DefaultEngine" />
     </View>
    </ScrollView></LinearGradient>
  );
};

const styles2 = StyleSheet.create({
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
/**********************************************SafetyComponent***********************************************/
export const DefaultSafetyComponent = () => {
 // const navigation = useNavigation();

 // const handleBack = () => {
    //navigation.navigate('PreDeparture'); // Adjust this to your actual checklist route name
  //};

  return (
    <LinearGradient
    colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
    style={styles3.fullScreenGradient}
  >
  <ScrollView contentContainerStyle={styles3.container}> 
  <View style={styles3.listContainer}>
      <InfoBox labelText="The Ship/Shore Safety Check" path="DefaultShore" origin="DefaultSafety" />
      <InfoBox labelText="Damage control plans check" path="DefaultDamageControl" origin="DefaultSafety" />
      <InfoBox labelText="Fire protection system check" path="DefaultFireProtect" origin="DefaultSafety" />
      <InfoBox labelText="Survival Craft" path="DefaultSurvival" origin="DefaultSafety" />
      <InfoBox labelText="inert gas system (IGS)" path="DefaultIGS" origin="DefaultSafety" />
      <InfoBox labelText="Crude Oil system" path="DefaultCrudeOil" origin="DefaultSafety" />
      <InfoBox labelText="Bulk Liquid Chemicals" path="DefaultLiquidChemicals" origin="DefaultSafety"/>
      <InfoBox labelText="Bulk Liquefied Gases" path="DefaultLiquefiedGases" origin="DefaultSafety" />
      
      {/*<TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
  </TouchableOpacity>*/}</View>
    </ScrollView></LinearGradient>
  );
};

const styles3 = StyleSheet.create({
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
/**************************************************LogisticsComponent*********************************************/
export const DefaultLogisticsComponent = () => {
  const navigation = useNavigation();

 // const handleBack = () => {
    //navigation.navigate('PreDeparture'); // Use the correct route name for your navigation setup
  //};

  return (
    <LinearGradient
    colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
    style={styles4.fullScreenGradient}
  >
  <ScrollView contentContainerStyle={styles4.container}> 
  <View style={styles4.listContainer}>
      <InfoBox labelText="Container check" path="DefaultContainerLogistics" origin="DefaultLogistics" />
      
      {/*<TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
  </TouchableOpacity>*/}</View>
    </ScrollView></LinearGradient>
  );
};

const styles4 = StyleSheet.create({
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
export const DefaultHospitalityComponent = () => {
  const navigation = useNavigation();

  //const handleBack = () => {
   // navigation.navigate('PreDeparture'); // Adjust the route name as needed
  //};

  return (
    <LinearGradient
    colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
    start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
    style={styles5.fullScreenGradient}
  >
  <ScrollView contentContainerStyle={styles5.container}> 
  <View style={styles5.listContainer}>
      <InfoBox labelText="Accomodation/Catering" path="DefaultAccomodationHospitality" origin="DefaultHospitality" />
      
      {/*<TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
  </TouchableOpacity>*/}</View>
    </ScrollView></LinearGradient>
  );
};

const styles5 = StyleSheet.create({
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

/**********************************************SubmissionComponent****************************************/

export const SubmissionComponent = () => {
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
});
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/



/*******************************************ChecklistQuestionTemplateComponent******************************/


export const ChecklistQuestionTemplateComponent = ({ questions, onSubmit, text,onBack}) => {
  const [notesStates, setNotesStates] = useState(questions.map(() => ({ showNotesInput: false, notes: '' })));
  const [questionsState, setQuestionsState] = useState(questions);
   // Add a state for input heights
const [inputHeights, setInputHeights] = useState({});

  const navigation = useNavigation();
  const dispatch = useDispatch();
 
  //const { backPath } = route.params || { backPath: 'DefaultBackPath' };
  // Retrieve the state to determine if navigation came from DeckComponent
  const { fromDeck } = useSelector((state) => state.navigation);

  

  // Function to handle text input change
  const handleInputChange = (id, newText) => {
    const updatedQuestions = questionsState.map(question =>
      question.id === id ? { ...question, text: newText } : question
    );
    setQuestionsState(updatedQuestions);
  };

  const handleRadioChange = (id, newValue) => {
    const updatedQuestions = questionsState.map(question =>
      question.id === id ? { ...question, selectedValue: newValue } : question
    );
    setQuestionsState(updatedQuestions);
  };

  const handleSaveNotes = (index) => {
    // Save notes functionality, you may dispatch an action to update state or send data to backend
    console.log('Notes saved:', notesStates[index].notes);
    const updatedNotesStates = [...notesStates];
    updatedNotesStates[index].showNotesInput = false;
    setNotesStates(updatedNotesStates);
  };
    
  const handleBlur = (id) => {
    const updatedQuestions = questionsState.map(question =>
      question.id === id ? { ...question, isEditable: false } : question
    );
    setQuestionsState(updatedQuestions);
  };

 
   
   
    

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
    
   
    const handleBackNotes = (index) => {
      // Handle back button functionality
      const updatedNotesStates = [...notesStates];
      updatedNotesStates[index].showNotesInput = false;
      setNotesStates(updatedNotesStates);
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
    
    
    

    return (<LinearGradient
      colors={['#FFFFFF', '#A59FFF', '#6C63FF', '#2C1FFD']}
      start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
      style={styles5.fullScreenGradient}
    >
      <SafeAreaView style={styles6.safeArea}>
        <ScrollView style={styles6.container}>

          <View style={styles6.headerContainer}>
              <Text style={styles6.headerText}>{text}</Text>
            </View>
          
          {questionsState.map((question, index) => (
            <View key={index} style={styles6.questionContainer}>
              
              <View style={styles6.questionSubContainer}>
                <TextInput
                  style={[styles6.input, question.isEditable ? styles6.editableInput : styles6.nonEditableInput,{height: Math.max(35, inputHeights[question.id] || 35)}]}
                  onChangeText={text => handleInputChange(question.id, text)}
                  onBlur={() => handleBlur(question.id)}
                  value={question.text}
                  editable={question.isEditable}
                  multiline={true} // Enable multiline input
                  onContentSizeChange={(event) => handleContentSizeChange(question.id, event)} // Adjust height based on content
                  selectTextOnFocus={question.isEditable} required 

                />
                 {!notesStates[index].showNotesInput && (
            <TouchableOpacity
              onPress={() => {
                const updatedNotesStates = [...notesStates];
                updatedNotesStates[index].showNotesInput = true;
                setNotesStates(updatedNotesStates);
              }}
              style={styles6.iconButton}
            >
              <Icon name="note-add" size={24} color="black" />
            </TouchableOpacity>
          )}
             
              </View>
              
             
        <View key={question.id} style={styles6.question}>
        

          {!notesStates[index].showNotesInput ? (
         <View style={styles6.radioButtonContainer}>
         {['option1', 'option2', 'option3'].map((option) => (
           <TouchableOpacity 
             key={option} 
             onPress={() => handleRadioChange(question.id, option)}
             style={styles6.radioButton}
           >
             <Icon 
               name={question.selectedValue === option ? "radio-button-checked" : "radio-button-unchecked"} 
               size={20}  color="black"
             />
             <Text style={styles6.radioButtonLabel}>
               {option === 'option1' ? 'Done' : option === 'option2' ? 'Not Yet Done' : 'Not Applicable'}
             </Text>
           </TouchableOpacity>
         ))}
       </View>
          ) : (
            <View>
              <TextInput
                multiline
                numberOfLines={4}
                onChangeText={(text) => {
                  const updatedNotesStates = [...notesStates];
                  updatedNotesStates[index].notes = text;
                  setNotesStates(updatedNotesStates);
                }}
                value={notesStates[index].notes}
                placeholder="Add a note..."
                style={styles6.notesInput}
              />
              <View style={styles6.actionButtons}>
                <TouchableOpacity onPress={() => handleSaveNotes(index)} style={styles6.iconButton}>
                  <Icon name="save" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleBackNotes(index)}
                  style={styles6.iconButton}
                >
                  <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
     
       
            </View>
             
          ))}
           <View style={styles6.buttonContainer}>

           <StyledButton title="Back" onPress={()=>handleBack(onBack)} backgroundColor="#e74c3c" />
          <StyledButton title="Submit" onPress={onSubmit} />
   
  </View>
        </ScrollView>
      </SafeAreaView>
      </LinearGradient>
    );
  };
export  const StyledButton = ({ onPress, title, backgroundColor = '#007AFF', textColor = 'white' }) => (
    <View style={styles6.buttonWrapper}>
    <TouchableOpacity
      onPress={onPress}
      style={[styles6.button, { backgroundColor }]}
    >
      <Text style={[styles6.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity></View>
  );
  

const styles6 = StyleSheet.create({
  question:{
color:'black',
 },

  radioButtonContainer: {
    flexDirection: 'column',
   // alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: 'row', // Ensure that children (the icon and label) are displayed in a row
    alignItems: 'center', // Center-align children vertically
    marginRight: 10, // Add some space between this button and the next element
    color:'black',
   // backgroundColor:'black',
  },
  radioButtonLabel: {
    color:'black',
    fontSize: 14,
    marginLeft: 8, // Add some space between the icon and the label for clarity
  },
 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20, // Add top margin if needed
  },
  buttonWrapper: {
    flex: 1, // Take up equal space in the flex direction
    paddingHorizontal: 16, // Add some spacing between buttons
  },
  button: {
    paddingVertical: 10,
    // Specify width and height to ensure uniform size
    width: '100%', // Take up all available space in the buttonWrapper
    height: 50, // Specify the height for uniformity
    borderRadius: 20,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },

  iconButton: {
      padding: 10, // Add padding to increase the touchable area
      marginLeft: 5, // Optional: add some margin if icons are too close together
      color:'black',
      backgroundColor:'black',
    },
  safeArea: {
      flex: 1,
  },
  container: {
      flex: 1,
      padding: 10,
  },
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


  
  
  nonEditableInput: {
      borderWidth: 0,
      color:'black',
  },
  editableInput: {
      borderWidth: 1,
      borderColor: '#ddd',
      color:'black',
  },
  
  questionSubContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    radioTouchable: {
      flexDirection: 'row',
      alignItems: 'center',
    },
   
    radioButtonInner: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: '#000',
    },
   
    questionContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
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
    radioGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
   
    
    iconButton: {
      padding: 10,
      marginHorizontal: 5,
    },
    notesInput: {
      backgroundColor: '#F7F7F8',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 8,
      height: 100,
      textAlignVertical: 'top',
      fontSize: 12,
      borderWidth: 1,
      borderColor: '#E1E1E1',
      marginBottom: 10,
      color:'black',
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    saveBackIcons: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    icon: {
      marginHorizontal: 5,
    },
    
});
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/***********************************************DocumentationComponent*****************************************/
 //Documentation Questions Structure
 const DocumentationQuestions = [
  { id: 1, text: 'What is the purpose of the documentation?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'How do you handle external hull inspections?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Describe the ISM Code compliance process.', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultDocumentationComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    dispatch(setNextPath('DefaultExternalHullPreBoarding')); // Adjust according to your action's needs
    navigation.navigate('Submission'); // Adjust according to your screen's name
  };
  const handb=()=>{
    navigation.navigate('DefaultDeck');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChecklistQuestionTemplateComponent questions={DocumentationQuestions} onSubmit={handleSubmit} text="Documentation" onBack={handb} />
    </ScrollView>
  );
};
  
 /***********************************************ExternalHullPreBoardingComponent*****************************************/ 
 
 //externalHullPreBoarding Questions Structure
 const externalHullPreBoardingQuestions = [
  { id: 1, text: 'Question 1 for External Hull Pre-Boarding?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for External Hull Pre-Boarding?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for External Hull Pre-Boarding?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultExternalHullPreBoardingComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    dispatch(setNextPath('DefaultIsmCode')); // Set the next path
    navigation.navigate('Submission'); // Navigate to the submission screen
  };
  const handb=()=>{
    navigation.navigate('DefaultDocumentation');
  }


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChecklistQuestionTemplateComponent questions={externalHullPreBoardingQuestions } onSubmit={handleSubmit} text="External Hull Pre Boarding" onBack={handb} />
    </ScrollView>
  );
};


/***********************************************ISMCodeComponent*****************************************/



//ISMCode Questions Structure
const ISMCodeQuestions = [
  { id: 1, text: 'Question 1 for ISMCode?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for ISMCode?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for ISMCode?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultISMCodeComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    dispatch(setNextPath('DefaultRadio')); // Set the next path
    navigation.navigate('Submission'); // Navigate to the submission screen
  };
  const handb=()=>{
    navigation.navigate('DefaultExternalHullPreBoarding');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChecklistQuestionTemplateComponent questions={ISMCodeQuestions} onSubmit={handleSubmit} text="ISM Code" onBack={handb} />
    </ScrollView>
  );
};

/***********************************************RadioComponent*****************************************/

 //Radio Questions Structure
 const RadioQuestions = [
  { id: 1, text: 'Question 1 for Radio?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for Radio?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for Radio?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultRadioComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    dispatch(setNextPath('DefaultWheelHouse')); // Set the next path
    navigation.navigate('Submission'); // Navigate to the submission screen
  };
  const handb=()=>{
    navigation.navigate('DefaultWheelHouse');
  }


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChecklistQuestionTemplateComponent questions={RadioQuestions} onSubmit={handleSubmit} text="Radio" onBack={handb} />
    </ScrollView>
  );
};

/***********************************************WheelHouseComponent*****************************************/
const WheelHouseQuestions = [
  { id: 1, text: 'Question 1 for WheelHouse?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for WheelHouse?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for WheelHouse?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultWheelHouseComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    dispatch(setNextPath('DefaultCommonCheck')); // Set the next path
    navigation.navigate('Submission'); // Navigate to the submission screen
  };
  const handb=()=>{
    navigation.navigate('DefaultIsmCode');
  }


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChecklistQuestionTemplateComponent questions={WheelHouseQuestions} onSubmit={handleSubmit} text="Wheel House" onBack={handb} />
    </ScrollView>
  );
};

 /***********************************************CommonCheckComponent*****************************************/ 
//CommonCheck Questions Structure
const CommonCheckQuestions = [
  { id: 1, text: 'Question 1 for CommonCheck?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for CommonCheck?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for CommonCheck?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultCommonCheckComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    dispatch(setNextPath('DefaultDeckHoursRestFatigue')); // Set the next path
    navigation.navigate('Submission'); // Navigate to the submission screen
  };
  const handb=()=>{
    navigation.navigate('DefaultRadio');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChecklistQuestionTemplateComponent questions={CommonCheckQuestions} onSubmit={handleSubmit} text="Common Check" onBack={handb} />
    </ScrollView>
  );
};

/***********************************************DeckHoursofRestComponent*****************************************/
 //DeckHoursofRest Questions Structure
 const DeckHoursofRestQuestions = [
  { id: 1, text: 'Question 1 for DeckHoursofRest?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for DeckHoursofRest?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for DeckHoursofRest?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultDeckHoursofRestComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    dispatch(setNextPath('default-checklist')); // Set the next path
    navigation.navigate('Submission'); // Navigate to the submission screen
  };
  const handb=()=>{
    navigation.navigate('DefaultCommonCheck');
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChecklistQuestionTemplateComponent questions={DeckHoursofRestQuestions} onSubmit={handleSubmit} text="Deck Hours of Rest" onBack={handb} />
    </ScrollView>
  );
};

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/***********************************************EngineRoom*****************************************/
  
//Engine Questions Structure
  const EngineQuestions = [
    { id: 1, text: 'Question 1 for Engine', isEditable: false, selectedValue: 'option1' },
    { id: 2, text: 'Question 2 for Engine', isEditable: false, selectedValue: 'option1' },
    { id: 3, text: 'Question 3 for Engine', isEditable: false, selectedValue: 'option1' },
    // Add more questions as needed
  ];

  export const DefaultEngineRoom = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
      dispatch(setNextPath('default-checklist'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    
    return <ChecklistQuestionTemplateComponent questions={EngineQuestions} onSubmit={handleSubmit} text='Engine'   />;
  };

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/***********************************************ShoreSafety*****************************************/

//ShoreSafety Questions Structure
const ShoreSafetyQuestions = [
  { id: 1, text: 'Question 1 for ShoreSafety', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for ShoreSafety', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for ShoreSafety', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultShoreSafety=()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
      dispatch(setNextPath('DefaultDamageControl'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    const handb=()=>{
      navigation.navigate('DefaultSafety');
    }
    return <ChecklistQuestionTemplateComponent questions={ShoreSafetyQuestions} onSubmit={handleSubmit} text='Shore Safety' onBack={handb}  />;
  }
/***********************************************DamageControlSafety*****************************************/
  //DamageControlSafety Questions Structure
const DamageControlSafetyQuestions = [
  { id: 1, text: 'Question 1 for DamageControlSafety', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for DamageControlSafety', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for DamageControlSafety', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultDamageControlSafety=()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
      dispatch(setNextPath('DefaultFireProtect'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    const handb=()=>{
      navigation.navigate('DefaultShore');
    }
    return <ChecklistQuestionTemplateComponent questions={DamageControlSafetyQuestions} onSubmit={handleSubmit} text='Damage Control' onBack={handb} />;
  }
/***********************************************FireSafety*****************************************/

//FireSafety Questions Structure
const FireSafetyQuestions = [
  { id: 1, text: 'Question 1 for FireSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for FireSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for FireSafety?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultFireSafety=()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleSubmit = () => {
      dispatch(setNextPath('DefaultSurvival'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    const handb=()=>{
      navigation.navigate('DefaultDamageControl');
    }
    return <ChecklistQuestionTemplateComponent questions={FireSafetyQuestions} onSubmit={handleSubmit} text='Fire Safety' onBack={handb} />;
  }
/***********************************************SurvivalSafety*****************************************/
//SurvivalSafety Questions Structure
const SurvivalSafetyQuestions = [
  { id: 1, text: 'Question 1 for SurvivalSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for SurvivalSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for SurvivalSafety?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultSurvivalSafety=()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
      dispatch(setNextPath('DefaultIGS'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    const handb=()=>{
      navigation.navigate('DefaultFireProtect');
    }
    return <ChecklistQuestionTemplateComponent questions={SurvivalSafetyQuestions} onSubmit={handleSubmit} text='Survival Safety' onBack={handb}  />;
  }
/***********************************************IGSSafety*****************************************/

//IGSSafety Questions Structure
const IGSSafetyQuestions = [
  { id: 1, text: 'Question 1 for IGSSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for IGSSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for IGSSafety?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultIGSSafety=()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
      dispatch(setNextPath('DefaultCrudeOil'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    const handb=()=>{
      navigation.navigate('DefaultSurvival');
    }
    return <ChecklistQuestionTemplateComponent questions={IGSSafetyQuestions} onSubmit={handleSubmit} text='IGS Safety' onBack={handb} />;
  }
/***********************************************CrudeOilSafety*****************************************/

//CrudeOilSafety Questions Structure
const CrudeOilSafetyQuestions = [
  { id: 1, text: 'Question 1 for CrudeOilSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for CrudeOilSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for CrudeOilSafety?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultCrudeOilSafety=()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
      dispatch(setNextPath('DefaultLiquidChemicals'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    const handb=()=>{
      navigation.navigate('DefaultIGS');
    }
    return <ChecklistQuestionTemplateComponent questions={CrudeOilSafetyQuestions} onSubmit={handleSubmit} text='Crude Oil Safety' onBack={handb} />;
  }
/***********************************************LiquiedChemicalsSafety*****************************************/

//LiquiedChemicals Questions Structure
const LiquiedChemicalsQuestions = [
  { id: 1, text: 'Question 1 for LiquiedChemicals?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for LiquiedChemicals?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for LiquiedChemicals?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

export const DefaultLiquiedChemicalsSafety=()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
      dispatch(setNextPath('DefaultLiquefiedGases'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    const handb=()=>{
      navigation.navigate('DefaultCrudeOil');
    }
    return <ChecklistQuestionTemplateComponent questions={LiquiedChemicalsQuestions} onSubmit={handleSubmit} text='Liquied Chemicals Safety' onBack={handb} />;
  }

/***********************************************LiquefiedGasSafety*****************************************/

//LiquefiedGasSafety Questions Structure
const LiquefiedGasSafetyQuestions = [
  { id: 1, text: 'Question 1 for LiquefiedGasSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for LiquefiedGasSafety?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for LiquefiedGasSafety?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultLiquefiedGasSafety=()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
      dispatch(setNextPath('default-checklist'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };
    const handb=()=>{
      navigation.navigate('DefaultLiquidChemicals');
    }
    
    return <ChecklistQuestionTemplateComponent questions={LiquefiedGasSafetyQuestions} onSubmit={handleSubmit} text='Liquefied Gas Safety' onBack={handb} />;
  }
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

/***********************************************ContainerLogistics*****************************************/

//ContainerLogistics Questions Structure
const ContainerLogisticsQuestions = [
  { id: 1, text: 'Question 1 for ContainerLogistics?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for ContainerLogistics?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for ContainerLogistics?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];


  export const DefaultContainerLogistics=()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
      dispatch(setNextPath('default-checklist'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };

    return <ChecklistQuestionTemplateComponent questions={ContainerLogisticsQuestions} onSubmit={handleSubmit} text='Container Logistics' />;
  }

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/
   
/***********************************************AccomodationHosipitality*****************************************/
//AccomodationHosipitality Questions Structure
 const AccomodationHosipitalityQuestions = [
  { id: 1, text: 'Question 1 for AccomodationHosipitality?', isEditable: false, selectedValue: 'option1' },
  { id: 2, text: 'Question 2 for AccomodationHosipitality?', isEditable: false, selectedValue: 'option1' },
  { id: 3, text: 'Question 3 for AccomodationHosipitality?', isEditable: false, selectedValue: 'option1' },
  // Add more questions as needed
];

  export const DefaultAccomodationHospitality=()=> {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = () => {
      dispatch(setNextPath('default-checklist'));// Set the next path
      //navigate('/submission', { state: { nextPath: '/external-hull-pre-boarding' } });
      navigation.navigate('Submission'); // Navigate to the submission component
      
    // Navigate to submission component as before
    };

    return <ChecklistQuestionTemplateComponent questions={AccomodationHosipitalityQuestions} onSubmit={handleSubmit} text='Accomodation Hospitality'  />;
  }
  
/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

  
 
