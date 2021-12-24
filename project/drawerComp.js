import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    StyleSheet,
    View,
    Text,
    Pressable,
    TouchableHighlight
} from 'react-native';

const Home = () => {
    return (
        <View>
            <Text>This is Home</Text>
        </View>
    )
}

const Settings = () => {
    return (
        <View>
            <Text>This is Settings</Text>
        </View>
    )
}

const Drawer = createDrawerNavigator();

const DrawerTab = () => {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Settings" component={Settings}/>
        </Drawer.Navigator>
        </NavigationContainer>
       
    )
}



export default DrawerTab;