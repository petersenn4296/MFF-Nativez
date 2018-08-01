import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { bindActionCreators } from 'redux'
import { getOpenTrucks, linkToTruck } from '../actions'
import Carousel from 'react-native-snap-carousel'

class LoggedInEater extends Component {
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
    this.props.getOpenTrucks()
  }

  renderItem = ({item, index}) => {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer}>
                  <Image source={require('../images/food-truck.jpg')}/>
                </View>
                <Text>{item.key}</Text>
                <View style={styles.buttonContainer2}>
                  <Text onPress = {() => navigate('EaterTruckMenu', item.id)}>Go To Truck</Text>
                </View>
            </View>
        );
    }

  render() {
    const { navigate } = this.props.navigation
    const openTrucks = this.props.openTrucks
    let allOpenTrucks = []
    if (openTrucks[0]) {
      openTrucks.forEach(truck => {
        allOpenTrucks.push({key: truck.truckName, id: truck.id})
      })
    }
    return (
      <View style={styles.container}>
        <Text>This is the Logged in eater page</Text>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
<<<<<<< HEAD
        <Text>This is the trucks online</Text>
        <FlatList
=======
        <Text>This is the Menu</Text>
        <Carousel
>>>>>>> 854bf6cbb016f313b6129a552fae03c9223b0e62
          data={allOpenTrucks}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    openTrucks: state.mainReducer.openTrucks,
    currentUser: state.mainReducer.currentUser,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getOpenTrucks,
  linkToTruck
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInEater);

const horizontalMargin = 5;
const slideWidth = 280;

const sliderWidth = 360;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 440;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4592C1',
  },
  truckList: {
    // flex: 0.75,
    width: 300,
    height: 50,
    backgroundColor: 'white',
  },
  slide: {
    backgroundColor: '#E6E167',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin
    // other styles for the item container
  },
  slideInnerContainer: {
    overflow: 'hidden',
    backgroundColor: '#E6E167',
    borderRadius: 10,
    padding: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    width: slideWidth,
    flex: 1
    // other styles for the inner container
  }
})
