import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

class TabOne extends Component {

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{marginLeft: 50}}>Description of App</Text>
        </View>
      </ScrollView>
    );
  }
}

export default TabOne;