import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import { duckOperations } from "../../state/ducks/duck";


class Profile extends Component {

  static navigationOptions = {
    title: 'Profile'
  };

  componentDidMount() {
    this.props.getUser('alanjsph');
  }

  render() {
    const { user, loadingProfile } = this.props;

    if (loadingProfile) return (<View styles={styles.container}><Text>Loading...</Text></View>);

    const { name, login, avatar_url } = user;
    return (
      <View style={styles.container}>
        <Text>Name: {name}</Text>
        <Text>Login: {login}</Text>
        <Image
          style={{width: 250, height: 250}}
          source={{uri: avatar_url}}
        />
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

const mapStateToProps = (state) => {
return {
    user: state.duck.github.user,
    loadingProfile: state.duck.github.loadingUser
    };
};

const mapDispatchToProps = {
  getUser: duckOperations.getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);