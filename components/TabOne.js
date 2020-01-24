import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

class TabOne extends Component {

  render() {
    return (
      <Card title='About Flashcards'>
        <Text style={styles.container}>Description of App</Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 50
  }
});

export default TabOne;