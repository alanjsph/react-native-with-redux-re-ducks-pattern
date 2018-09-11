import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { duckOperations } from "../../state/ducks/duck";


class RepoDetail extends Component {
  static navigationOptions = {
    title: 'RepoDetail'
  };
  componentDidMount() {
    const { name } = this.props.navigation.state.params
    this.props.getRepoDetail('alanjsph', name)
  }
  render() {
    const { repoInfo, loadingInfo } = this.props;
    if (loadingInfo) return <Text>Loading...</Text>;

    const {
      name,
      full_name,
      description,
      forks_count,
      stargazers_count
    } = repoInfo;

    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{full_name}</Text>
        <Text>{description}</Text>
        <Text>Forks: {forks_count}</Text>
        <Text>Stars: {stargazers_count}</Text>
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

const mapStateToProps = ({ duck }) => ({
  repoInfo: duck.github.repoInfo,
  loadingInfo: duck.github.loadingInfo
});

const mapDispatchToProps = {
  getRepoDetail: duckOperations.getRepoDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);