import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

class TabTwo extends Component {

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{marginLeft: 50}}>Flash card</Text>
        </View>
      </ScrollView>
    );
  }
}

export default TabTwo;