/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const Start: React.FC<{}> = () => {
  const handleStartButton = () => console.log('player wants to create a game');
  const handleRulesButton = () => console.log('player wants to know the rules');

  const styles = StyleSheet.create({
    titleText: {
      fontWeight: 'bold',
      alignItems: 'center',
    },
  });

  return (
    <SafeAreaView>
        <Text style={styles.titleText}>
          Plump App
        </Text>
        <Button
          onPress={handleStartButton}
          title="Create Game"
        />
        <Button
          onPress={handleRulesButton}
          title="Rules"
        />
    </SafeAreaView>
  );
};
