/**
 * CloudCard
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import Navigator from './app/routes';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, storePersistor} from "./app/state/store";

const persistGatePage = () => {
return(<View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        </View>)
        }

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={persistGatePage()} persistor={storePersistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});