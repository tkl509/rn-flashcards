import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

class Home extends Component {

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{marginLeft: 100}}>This is the home component!!</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Home;