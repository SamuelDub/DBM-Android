import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as Discord from 'discord.js';

const bot = new Discord.Client();

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TextInput></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
