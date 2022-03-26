import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../screens/Preload';
import BottomTabsRoutes from './BottomTabs.routes';
import CriarCliente from '../screens/CriarCliente';
import CriarServico from '../screens/CriarServico';
import CriarAgenda from '../screens/CriarAgenda';

const Stack = createNativeStackNavigator();
//<Stack.Screen name="preload" component={Preload}/>
export default () => {
    return (
        <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
            <Stack.Screen name="home" component={BottomTabsRoutes}/>
            <Stack.Screen name="createClient" component={CriarCliente} options={{headerShown:true,animation:'slide_from_right', title:"Cadastrar Cliente"}}/>
            <Stack.Screen name="createService" component={CriarServico} options={{headerShown:true,animation:'slide_from_right', title:"Cadastrar Serviço"}}/>
            <Stack.Screen name="createAgenda" component={CriarAgenda} options={{headerShown:true,animation:'slide_from_right', title:"Agendar"}}/>
        </Stack.Navigator>        
    );
}