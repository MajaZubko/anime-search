import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Search, Details} from '../screens';

const {Screen, Navigator} = createNativeStackNavigator();

const MainNav: FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Search" component={Search} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
