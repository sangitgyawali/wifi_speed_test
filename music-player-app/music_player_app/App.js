import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TopTabNavigator from './app/navigation/TopTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <TopTabNavigator />  {/* Only wrap the top-level navigator here */}
    </NavigationContainer>
  );
};

export default App;
