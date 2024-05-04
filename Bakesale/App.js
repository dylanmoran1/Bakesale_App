import React from 'react';
import {StatusBar, Text, View, StyleSheet } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>Bakesale</Text>
          <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 40
  }
})


export default App;