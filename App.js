import { useState } from 'react';
import { Button, StyleSheet, Text, View, Alert,Linking  } from 'react-native';

export default function App(props) {
  const [Count, setCount] = useState(0)
  const HandleClick = () => {
    
    setCount(Count+1)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Count}</Text>
            
      <Button title="press" onPress={ HandleClick} />
    
      <Text style={styles.text}> you click {Count} time</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color  : "white"
  }
});
