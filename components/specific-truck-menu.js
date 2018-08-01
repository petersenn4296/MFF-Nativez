import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createMenuItem, truckMenu, deleteItem } from '../actions'


import t from 'tcomb-form-native';
const Form = t.form.Form;
const User = t.struct({
  name: t.String,
  price: t.String,
});


class ChangeMenu extends Component {
  static navigationOptions = {
    title: 'MFF',
    headerTitleStyle: {
      fontSize: 40
    },
    headerTintColor: '#4592C1',
    headerStyle: {
      backgroundColor: '#1A3647'
    },
  };

  async componentDidMount(){
    this.props.truckMenu(this.props.navigation.state.params)
  }

 handleSubmit = (changeView) => {
    const value = this._form.getValue()
    let createItem = {
      truck_id: this.props.navigation.state.params,
      name: value.name,
      price: value.price
    }
    this.props.createMenuItem(createItem, this.props.navigation.state.params, changeView)
  }

  render() {
    const { navigate } = this.props.navigation
    const menu = this.props.menu
    let generateMenu = []
    if (menu) {
      for ( let item in menu){
        generateMenu.push({key: menu[item].name, price: menu[item].price, id: menu[item].id})
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.mom}>
          {!generateMenu[0] ? <Text style={styles.anyText}>you currently have no items</Text> : null}

          <FlatList
            data={generateMenu}
            renderItem={({item}) =>
            <View style={styles.menuContainer}>
              <View>
                <Text style={styles.anyText}> {"\n"}{item.key} {item.price} {item.quantity}        <Text onPress={() => this.props.deleteItem(item.id, this.props.navigation.state.params)}>X</Text></Text>
              </View>
            </View>
          }/>

        </View>
        <Text style={styles.header}>Add a new Dish</Text>
          <Form type={User} ref={c => this._form = c}/>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.handleSubmit(navigate)}
              title="Add Dish"
              color="#1A3647"
            />
          </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    orders: state.mainReducer.orders,
    menu: state.mainReducer.menu
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createMenuItem,
  truckMenu,
  deleteItem
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeMenu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4592C1',
  },
  header: {
    fontSize: 30,
    color: '#E6E167'
  },
  anyText: {
    fontSize: 24,
    color: '#1A3647'
  },
  buttonContainer: {
    marginBottom: 10,
    backgroundColor: '#E6E167',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  menuContainer: {
    marginBottom: 5,
    backgroundColor: '#E6E167',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  mom: {
    height: 300,
    // width:
  }
})
