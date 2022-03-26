import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StacksRoutes from './routes/Stacks.routes';
import { StatusBar } from 'react-native';
import global from './global';
import AgendaContex from './context/AgendaContex';

export default () => {
  return (
    <AgendaContex>
    <NavigationContainer>
      <StatusBar backgroundColor={global.colors.darkPink}/>
      <StacksRoutes />
    </NavigationContainer>
    </AgendaContex>
  )
}