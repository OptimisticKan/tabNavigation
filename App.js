import React, {Component} from 'react';
import {Button,Text, View } from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from '@expo/vector-icons';

class HomeScreen extends Component {
  render(){
    return (
      <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Home!!!</Text>
      <Button title="Go to Settings" onPress={()=>this.props.navigation.navigate('Settings')}/>
      <Button title="Go to Details" onPress={()=>this.props.navigation.navigate('Details')}/>
      </View>  
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Setting!!!</Text>
      <Button title="Go to Home" onPress={()=>this.props.navigation.navigate('Home')}/>
      <Button title="Go to Details" onPress={()=>this.props.navigation.navigate('Details')}/>
      </View>
    );
  }
}
class DetailsScreen extends Component {
  render(){
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>Details~~~</Text>
        <Button title="Go to Home" onPress={()=>this.props.navigation.navigate('Home')}/>
        <Button title="Go to Settings" onPress={()=>this.props.navigation.navigate('Settings')}/> 
      </View>
    );
  }
} 
const HomeStack = createStackNavigator({
  Home:{
    screen:HomeScreen
  },
  Details:{
    screen:DetailsScreen
  },
});

const SettingsStack = createStackNavigator({
  Settings:{
    screen:SettingsScreen
  },
  Details:{
    screen:DetailsScreen
  },
});

// const DetailsStack = createStackNavigator({
//   Home : {
//     screen : HomeScreen
//   },
//   Settings : {
//     screen : SettingsScreen
//   }
// });

const TabNavigator = createBottomTabNavigator({
  Home:{
    screen:HomeStack
  },
  Settings:{
    screen:SettingsStack
  },
  // Details:{
  //   screen:DetailsStack
  // }
},
  {defaultNavigationOptions:({navigation}) => ({
    tapBarIcon:({focused, tintColor}) => {
      const{routeName} = navigation.state;
      //navigation.state 라이브러리 안에 벨류값중 HomeScreen, Settings : SettingScreen를 활용
      let iconName;
      if (routeName === 'Home'){
          iconName = `ios-information-circle${focused ? '' : `-outline`}`
      }
      else if(routeName === 'Settings') {
          iconName = `logo-add-circle${focused ? '' : `-outline`}`
      }
      return <Ionicons name={iconName} size={25} color={tintColor}/>;
    },
  }),

    tabBarOptions:{
     activeTintColor:'tomato',
     inactiveTintColor:'gray' 
    }
  });

export default createAppContainer(TabNavigator);