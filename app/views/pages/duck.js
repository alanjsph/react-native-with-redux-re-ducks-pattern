import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { duckOperations } from "../../state/ducks/duck";

class Duck extends Component {
  static navigationOptions = {
    title: 'Duck'
  };
  componentDidMount() {
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => this.props.navigation.navigate('Detail', { name: item.name })}>
        <Text>{item.name}</Text>
    </TouchableOpacity>
  );
  render() {
    const { repos } = this.props;
    return (
      <View style={styles.container}>
        
        <FlatList
          data={repos}
          renderItem={this.renderItem}
          keyExtractor = { (item, index) => index.toString() }
        />
        <View>
         <Text>Quacking: {this.props.quacking ? 'true' : 'false' }</Text>
         <Button onPress={this.props.simpleQuack} title="quack" />
         <Button onPress={() => this.props.getNames('alanjsph')} title="update" />
       </View>
        
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
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  pad: {
    marginTop: 100
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.duck.github.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories,
    distance: state.duck.distance,
    quacking: state.duck.quacking
  };
};

const mapDispatchToProps = {
  getNames: duckOperations.getNames,
  simpleQuack: duckOperations.simpleQuack
};

export default connect(mapStateToProps, mapDispatchToProps)(Duck);