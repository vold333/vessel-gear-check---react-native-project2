import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import store from './components/screens/store';

import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';

import VerifyScreen from './components/VerifyScreen';
import NewPasswordScreen from './components/NewPasswordScreen';
import Dashboard from './components/screens/Dashboard';
import UserDashboard from './components/screens/UserDashboard.js';
import RolesScreen from './components/screens/RolesScreen';
import VesselProfileScreen from './components/screens/VesselProfileScreen.js';

import ChecklistScreen from './components/screens/ChecklistScreen';
import VisualizationScreen from './components/screens/VisualizationScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import DrawerContent from './DrawerContent'; // Import DrawerContent
import UserDrawerContent from './components/screens/UserDrawerContent.js';
import PersonalizationScreen from './components/screens/PersonalizationScreen';
import Notification from './components/screens/Notifications.js';

import CreateChecklistPage from './components/screens/CreateChecklistPage';
import ModifyDefaultChecklist from './components/screens/ModifyDefaultChecklist';

import NewChecklist from './components/screens/NewChecklist';
import { AddNewItemScreen } from './components/screens/NewChecklist';
import { EditItemsScreen } from './components/screens/NewChecklist';
import { Properties } from './components/screens/Properties';


import { SubmissionComponent } from './components/screens/DefaultDeptChecklistOptions';
import {DeckComponent,EngineComponent,SafetyComponent,LogisticsComponent,HospitalityComponent} from './components/screens/DeptChecklistOptions';

import { DocumentationComponent,External_hull_pre_boardingComponent,ISM_CodeComponent,Wheel_houseComponent,RadioComponent,Common_checkComponent,Deck_hours_of_rest_fatigueComponent } from './components/screens/DeptChecklistOptions';
import { EngineRoom } from './components/screens/DeptChecklistOptions';
import { ShoreSafety,DamageControlSafety,FireSafety,SurvivalSafety,IGSSafety,CrudeOilSafety,LiquiedChemicalsSafety,LiquefiedGasSafety } from './components/screens/DeptChecklistOptions';
import { ContainerLogistics } from './components/screens/DeptChecklistOptions';
import { AccomodationHospitality } from './components/screens/DeptChecklistOptions';


import { Provider } from 'react-redux';


import DefaultChecklistPage from './components/screens/DefaultChecklistPage';
import PreArrival from './components/screens/preArrival';
import PreDeparture from './components/screens/preDeparture';
import { DefaultDeckComponent,DefaultEngineComponent,DefaultSafetyComponent,DefaultLogisticsComponent,DefaultHospitalityComponent } from './components/screens/DefaultDeptChecklistOptions';

import { DefaultDocumentationComponent,DefaultExternalHullPreBoardingComponent,DefaultISMCodeComponent,DefaultRadioComponent,DefaultWheelHouseComponent,DefaultCommonCheckComponent,DefaultDeckHoursofRestComponent } from './components/screens/DefaultDeptChecklistOptions';
import { DefaultEngineRoom } from './components/screens/DefaultDeptChecklistOptions';
import { DefaultShoreSafety,DefaultDamageControlSafety,DefaultFireSafety,DefaultSurvivalSafety,DefaultIGSSafety,DefaultCrudeOilSafety,DefaultLiquefiedGasSafety,DefaultLiquiedChemicalsSafety } from './components/screens/DefaultDeptChecklistOptions';
import { DefaultContainerLogistics } from './components/screens/DefaultDeptChecklistOptions';
import { DefaultAccomodationHospitality } from './components/screens/DefaultDeptChecklistOptions';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Authentication stack navigator
const AuthStack = () => (
  <Stack.Navigator initialRouteName="Landing">
     <Stack.Screen
  name="Vessel Gear Check System"
  component={Landing}
  options={{
    headerTransparent: true,
    headerTintColor: 'white',
    headerTitleStyle: { fontWeight: 'bold', fontStyle: 'italic' }
  }}
/>
    
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerTransparent: true, headerTintColor: '#E1E1E1'}}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{headerTransparent: true, headerTintColor: 'white'}}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{headerTransparent: true, headerTintColor: 'white'}}
    />
    <Stack.Screen
      name="Verify"
      component={VerifyScreen}
      options={{headerTransparent: true, headerTintColor: 'white'}}
    />
    <Stack.Screen
      name="NewPassword"
      component={NewPasswordScreen}
      options={{headerTransparent: true, headerTintColor: 'white'}}
    />

  </Stack.Navigator>
);

// Dashboard drawer navigator
const DashboardDrawer = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerContent}>
    <Drawer.Screen
      name="Home"
      component={Dashboard}
      options={{
        headerStyle: {backgroundColor: '#333'},
        headerTintColor: '#fff',
      }}
    />
    <Drawer.Screen
      name="Roles"
      component={RolesScreen}
      options={{
        headerStyle: {backgroundColor: '#333'},
        headerTintColor: '#fff',
      }}
    />
    <Drawer.Screen
      name="Checklist"
      component={ChecklistScreen}
      options={{
        headerStyle: {backgroundColor: '#333'},
        headerTintColor: '#fff',
      }}
    />
    <Drawer.Screen
      name="Visualization"
      component={VisualizationScreen}
      options={{
        headerStyle: {backgroundColor: '#333'},
        headerTintColor: '#fff',
      }}
    />
    <Drawer.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerStyle: {backgroundColor: '#333'},
        headerTintColor: '#fff',
      }}
    />
  </Drawer.Navigator>
);

const App = () => {
  return (<Provider store={store}>
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardDrawer} options={{ headerShown: false }} />
        <Stack.Screen
          name="Personalization"
          component={PersonalizationScreen}
        />
       
        <Stack.Screen name="CreateChecklist" component={CreateChecklistPage} options={{ headerShown: true }} />
        <Stack.Screen name="ModifyDefaultChecklist" component={ModifyDefaultChecklist} options={{ headerShown: true }} />

        <Stack.Screen name="Deck" component={DeckComponent} options={{ headerShown: true }} />
        <Stack.Screen name="Engine" component={EngineComponent} options={{ headerShown: true }} />
        <Stack.Screen name="Safety" component={SafetyComponent} options={{ headerShown: true }} />
        <Stack.Screen name="Logistics" component={LogisticsComponent} options={{ headerShown: true }} />
        <Stack.Screen name="Hospitality" component={HospitalityComponent} options={{ headerShown: true }} />

        <Stack.Screen name="Documentation" component={DocumentationComponent} options={{ headerShown: false }} />
        <Stack.Screen name="External_hull_pre_boarding" component={External_hull_pre_boardingComponent} options={{ headerShown: false }} />
        <Stack.Screen name="ISM_Code" component={ISM_CodeComponent} options={{ headerShown: false }} />
        <Stack.Screen name="Wheel_house" component={Wheel_houseComponent} options={{ headerShown: false }} />
        <Stack.Screen name="Radio" component={RadioComponent} options={{ headerShown: false }} />
        <Stack.Screen name="Common_check" component={Common_checkComponent} options={{ headerShown: false }} />
        <Stack.Screen name="Deck_hours_of_rest_fatigue" component={Deck_hours_of_rest_fatigueComponent} options={{ headerShown: false }} />

        <Stack.Screen name="EngineRoom" component={EngineRoom} options={{ headerShown: false }} />
        
        <Stack.Screen name="shore" component={ShoreSafety} options={{ headerShown: false }} />
        <Stack.Screen name="fireprotect" component={FireSafety} options={{ headerShown: false }} />
        <Stack.Screen name="damagecontrol" component={DamageControlSafety} options={{ headerShown: false }} />
        <Stack.Screen name="survival" component={SurvivalSafety} options={{ headerShown: false }} />
        <Stack.Screen name="igs" component={IGSSafety} options={{ headerShown: false }} />
        <Stack.Screen name="crude-oil" component={CrudeOilSafety} options={{ headerShown: false }} />
        <Stack.Screen name="liquid-chemicals" component={LiquiedChemicalsSafety} options={{ headerShown: false }} />
        <Stack.Screen name="liquefied-gases" component={LiquefiedGasSafety} options={{ headerShown: false }} />

        <Stack.Screen name="containerlogistics" component={ContainerLogistics} options={{ headerShown: false }} />

        <Stack.Screen name="accomodationhospitality" component={AccomodationHospitality} options={{ headerShown: false }} />

        <Stack.Screen name="Submission" component={SubmissionComponent} options={{ headerShown: true }} />
{/*****************************************defaultchecklist****************************************************************************************/}
        
        <Stack.Screen name="default-checklist" component={DefaultChecklistPage} options={{ headerShown: true }} />

        <Stack.Screen name="PreArrival" component={PreArrival} options={{ headerShown: true }} />
        <Stack.Screen name="PreDeparture" component={PreDeparture} options={{ headerShown: true }} />

        <Stack.Screen name="DefaultDeck" component={DefaultDeckComponent} options={{ headerShown: true }} />
        <Stack.Screen name="DefaultEngine" component={DefaultEngineComponent} options={{ headerShown: true }} />
        <Stack.Screen name="DefaultSafety" component={DefaultSafetyComponent} options={{ headerShown: true }} />
        <Stack.Screen name="DefaultLogistics" component={DefaultLogisticsComponent} options={{ headerShown: true }} />
        <Stack.Screen name="DefaultHospitality" component={DefaultHospitalityComponent} options={{ headerShown: true }} />

        <Stack.Screen name="DefaultDocumentation" component={DefaultDocumentationComponent} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultExternalHullPreBoarding" component={DefaultExternalHullPreBoardingComponent} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultIsmCode" component={DefaultISMCodeComponent} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultWheelHouse" component={DefaultWheelHouseComponent} options={{ headerShown: false}} />
        <Stack.Screen name="DefaultRadio" component={DefaultRadioComponent} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultCommonCheck" component={DefaultCommonCheckComponent} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultDeckHoursRestFatigue" component={DefaultDeckHoursofRestComponent} options={{ headerShown: false }} />

        <Stack.Screen name="DefaultEngineRoomCheck" component={DefaultEngineRoom} options={{ headerShown: true }} />

        <Stack.Screen name="DefaultShore" component={DefaultShoreSafety} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultDamageControl" component={DefaultDamageControlSafety} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultFireProtect" component={DefaultFireSafety} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultSurvival" component={DefaultSurvivalSafety} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultIGS" component={DefaultIGSSafety} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultCrudeOil" component={DefaultCrudeOilSafety} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultLiquidChemicals" component={DefaultLiquiedChemicalsSafety} options={{ headerShown: false }} />
        <Stack.Screen name="DefaultLiquefiedGases" component={DefaultLiquefiedGasSafety} options={{ headerShown: false }} />

        <Stack.Screen name="DefaultContainerLogistics" component={DefaultContainerLogistics} options={{ headerShown: false }} />

         <Stack.Screen name="DefaultAccomodationHospitality" component={DefaultAccomodationHospitality} options={{ headerShown: false }} />    
     
{/*****************************************Newchecklist****************************************************************************************/}
         <Stack.Screen name="NewDepartment" component={NewChecklist} options={{ headerShown: true }}  initialParams={{ placeholderText: "Add a new department" }} />
         <Stack.Screen name="NewChecklist" component={NewChecklist} />
         <Stack.Screen name="AddNewItem" component={AddNewItemScreen} />
         <Stack.Screen name="EditItemsScreen" component={EditItemsScreen} />


         <Stack.Screen name="Properties" component={Properties} />
      
      
      </Stack.Navigator>
      
    </NavigationContainer></Provider>
  );
};

export default App;
