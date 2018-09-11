/**
 * CloudCard
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';

import { Provider } from 'react-redux';
import { Navigator } from './app/routes/navigator'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, storePersistor} from "./app/state/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading</Text>} persistor={storePersistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}