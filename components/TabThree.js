import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

class TabThree extends Component {

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{marginLeft: 50}}>
            Quiz -questions and multiple choice answers
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default TabThree;