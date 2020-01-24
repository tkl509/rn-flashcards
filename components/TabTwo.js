import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { QUESTIONS } from '../shared/questions';
import { ListItem } from 'react-native-elements';

class TabTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: QUESTIONS,
      questionNumber: 0
    };
  }

  render() {

    const questionNumber = this.state.questionNumber;
    const question = this.state.questions.id;
    const numberIndex = this.state.questionNumber + 1;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Card {numberIndex} of {this.state.questions.length}</Text>
          <Text style={{marginTop: 30}}>{this.state.questions[questionNumber].question}</Text>
          <View style={styles.formRow}>
            <Button
              onPress = { () => 
                Alert.alert(
                  'Answer:',
                  this.state.questions[questionNumber].answer,
                  [
                      {
                          text: 'Done',
                          style: 'cancel',
                          onPress: () => console.log('Cancel Pressed')
                      },
              ],
              { cancelable: false }
              )
              }
              title='Show Answer'
              color='#5637DD'
              accessibilityLabel='Tap me to show answer'
            />
          </View>
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
  },
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
    }
});

export default TabTwo;