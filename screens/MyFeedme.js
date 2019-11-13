import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default function MyFeedme() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Card title="Good Evening Jon!">
        {/*react-native-elements Card*/}
        <Text> 
          Past Orders ...
        </Text>
      </Card>
    </ScrollView>
  );
}

MyFeedme.navigationOptions = {
  title: 'My Feedme',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  card: {
    textAlign:'center',
  }
});
