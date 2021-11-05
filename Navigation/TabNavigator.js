import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet } from 'react-native';
import Feed from "../screens/Feed";
import CreateStory from '../screens/CreateStory';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends React.Component{
  render(){
    return(
      <Tab.Navigator 
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
          let IconName;
          if(route.name==="Feed"){
            IconName=focused
            ? "home"
            : "home-outline"
          } else if(route.name==="CreateStory"){
            IconName=focused
            ? "add-circle"
            : "add-circle-outline"
          }
          return(
            <Ionicons name={IconName} size={RFValue(20)} color={color} style={styles.icons}/>
          )
        }
      })}
      activeColor={"#ee8249"} 
      inactiveColor={"gray"}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreateStory" component={CreateStory} />
      </Tab.Navigator>
    )}
}


const styles = StyleSheet.create({ 
  bottomTabStyle: { 
    backgroundColor: "#2f345d", 
    height: "8%", 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    overflow: "hidden", 
    position: "absolute" 
  }, 
  icons: {
    width: RFValue(30), 
    height: RFValue(30) 
  } 
});

