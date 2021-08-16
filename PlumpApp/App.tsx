//import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import {Start} from './src/views/Start';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStore} from 'redux';
import allReducers from './src/reducers/allReducers';

const store = createStore(allReducers);

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Start />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
