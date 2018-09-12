import React from 'react';
import { connect } from 'react-redux';

import { authSelectors } from '../../../state/ducks/auth'


import {
  ActivityIndicator,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';

class AuthLoadingPage extends React.Component {
  componentDidMount() {
    this.processLoginAsync();
  }
  processLoginAsync = () => {
    const authState = this.props;
    // this.props
    //   .navigation
    //     .navigate(authSelectors.checkIfUserLoggedIn(authState) ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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
      token: state.auth.token,
    };
  };
  
//   const mapDispatchToProps = {
//     getNames: duckOperations.getNames,
//     simpleQuack: duckOperations.simpleQuack
//   };
  
  export default connect(mapStateToProps /*, mapDispatchToProps*/)(AuthLoadingPage);