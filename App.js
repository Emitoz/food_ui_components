import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Texts } from './src/components/Texts';
import { PrimaryButton } from './src/components/Buttons';
import { InputField } from './src/components/InputField';

import { colors } from './src/utils/colors';
import { fontSizes } from "./src/utils/fontSizes";

export default function App() {
  return (
    <View style={styles.container}>
      <Texts />
      <PrimaryButton title="Primary"/>
      <View style={{ marginTop: 20 }}></View>
      <InputField placeholder="Text input"/>
      <View style={{ marginTop: 20 }}></View>
      <InputField placeholder="Text input 2"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey.pageBackground,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20
  },
});
