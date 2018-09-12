import React from 'react';
import { connect } from 'react-redux';

import { authSelectors } from '../../../state/ducks/auth'
import { authOperations } from '../../../state/ducks/auth'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class SignInPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Signin screen</Text>
      </View>
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

const mapStateToProps = state => {
    return {
    //   token: state.auth.token,
    };
  };
  
//   const mapDispatchToProps = {
//     getNames: duckOperations.getNames,
//     simpleQuack: duckOperations.simpleQuack
//   };
  
  export default connect(mapStateToProps /*, mapDispatchToProps*/)(SignInPage);