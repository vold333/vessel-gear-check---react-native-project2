import {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function ChecklistScreen(props) {
  console.log(props);
  useEffect(() => {
    console.log('Hii');
  }, []);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>This is Checklist Screen</Text>
      <Button title="Visualization" onPress={() => props.navigation.navigate('Visualization')} />
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
export default ChecklistScreen;