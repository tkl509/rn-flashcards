import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

class TabThree extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>
            Quiz -questions and multiple choice answers
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TabThree;