import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Challenger from './Challenger';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {reducers} from './redux';

const Main = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView>
          <Challenger />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};

export default Main;
