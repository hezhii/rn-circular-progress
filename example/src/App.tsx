import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import CircularProgress from 'circular-progress-rn';

export default function App() {
  return (
    <View style={styles.container}>
      <CircularProgress progress={50} strokeLinecap="round" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
