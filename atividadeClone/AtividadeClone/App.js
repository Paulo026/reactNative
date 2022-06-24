import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const temaPadrao= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
//     Background:        '#282a36',   
// Current Line:       '#44475a',    
// Foreground:       ' #f8f8f2',    
// Comment:        '#6272a4',   
// Cyan:        '#8be9fd',   
// Green:        '#50fa7b',    
// Orange:        '#ffb86c',    
// Pink:      ' #ff79c6',    
// Purple:       ' #bd93f9,'    
// Red:       '#ff5555',    
// Yellow:       ' #f1fa8c',    

  }
});
