import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Anda sudah menekan tombol sebanyak {count} kali</Text>
      
      <Button onPress={() => setCount(count + 1)} title='Klik' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;