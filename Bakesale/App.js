import React from 'react';
import {StatusBar, Text, View, StyleSheet } from 'react-native';

import ajax from './src/ajax';
import DealList from './src/components/DealList';

class App extends React.Component {
  state = {
    deals: [],
  }

  async componentDidMount(){
    const deals = await ajax.fetchInitialDeals();
    this.setState((prevState) => {
      return { deals }
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
          {
            this.state.deals.length > 0
            ? <DealList deals = {this.state.deals}></DealList>
            : <Text style={styles.header}>Bakesale</Text>
          }
          
          
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