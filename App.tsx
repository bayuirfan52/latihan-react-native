import React, { Component, useState } from "react";
import { View, Text, ScrollView, Image, TextInput, Button } from "react-native";

const App = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView
      style={{
        padding: 16
      }}>
      <Text>Coba Scroll View</Text>
      <View
      style={{
        alignItems: "center"
      }}>
        <Text>{text}</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
          }}
          style={{ width: 200, height: 200 }} />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 8
        }}

        onChangeText={text => setText(text)}
        placeholder="Ini adalah hint" />
      <View style={{
        height: 40
      }} />
      <Button
        onPress={() => {
          console.log('you\'re tapped this');
        }}
        title="Press Me!!" />
    </ScrollView>
  );
};

export default App;