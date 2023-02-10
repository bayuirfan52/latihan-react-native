import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class App extends Component {
  state = {
    counter: 0,
  }

  onPress = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Klik</Text>
        </TouchableOpacity>
        <View>
          <Text>Anda sudah menekan sebanyak {this.state.counter} kali</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;