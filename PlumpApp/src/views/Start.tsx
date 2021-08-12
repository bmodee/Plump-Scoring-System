/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export const Start: React.FC<{}> = () => {
  return (
    <SafeAreaProvider>
       <Text>Plump</Text>
    </SafeAreaProvider>
  );
};
