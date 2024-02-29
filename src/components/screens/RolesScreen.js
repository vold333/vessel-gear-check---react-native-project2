import {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function RolesScreen(props) {
  console.log(props);
  useEffect(() => {
    console.log('Hii');
  }, []);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>This is Roles Screen</Text>
      <Button title="Checklist" onPress={() => props.navigation.navigate('Checklist')} />
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
export default RolesScreen;