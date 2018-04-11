import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {decrementcounter,incrementcounter} from '../actions';

type Props = {};
 class Main extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Distraction Counter
        </Text>
        <Text style={styles.Countcontent}>
          {this.props.count}
        </Text>
              <View style={styles.button}>
                      <TouchableOpacity onPress={() => this.props.incrementcounter()} >
                        <Text style={styles.Countcontent} >
                          +
                        </Text>
                      </TouchableOpacity >
                      <TouchableOpacity onPress={() => this.props.decrementcounter()} >
                        <Text style={styles.Countcontent}>
                          -
                        </Text>
                      </TouchableOpacity>
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',

    backgroundColor: '#F5FCFF',
  },
  Countcontent: {
    fontSize: 50,
    textAlign: 'center',

  },
  button: {
    flexDirection: 'row',
    justifyContent:'space-around'

  },
  welcome: {
    textAlign: 'center',
    fontSize: 30,
  }
});
var mapStateToProps = (state) => {
  return {
    count:state.count
  }
}
const mapDispatchToProps =(dispatch) => {
  return bindActionCreators({incrementcounter:incrementcounter,decrementcounter:decrementcounter},dispatch)
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(Main);
