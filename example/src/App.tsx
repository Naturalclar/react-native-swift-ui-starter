import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import SwiftUiStarter from 'react-native-swift-ui-starter';

export default function App() {
  return (
    <View style={styles.container}>
      <SwiftUiStarter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
