import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import TabNav from './components/TabNav';

export default function App() {
    return (
      <ScrollView>
        <View style={{ flex: 1, marginTop: 50 }}> 
          <TabNav />
        </View>
      </ScrollView>
    );
}