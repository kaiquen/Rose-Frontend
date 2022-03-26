import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carteira from '../screens/Caixa';
import Agenda from '../screens/Agenda';
import TabBar from '../components/TabBar';
import AgendaContex from '../context/AgendaContex';
import Servicos from '../screens/Servicos';
import Caixa from '../screens/Caixa';
import Clientes from '../screens/Clientes';
import Relatorios from '../screens/Relatorios';

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator initialRouteName='clientes' tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen name="agenda" component={Agenda} options={{title: 'Agenda'}}/>
            <Tab.Screen name="servicos" component={Servicos} options={{title: 'Serviços'}}/>
            <Tab.Screen name="caixa" component={Caixa} options={{title: 'Fluxo de Caixa'}}/>
            <Tab.Screen name="clientes" component={Clientes} options={{title: 'Clientes'}}/>
            <Tab.Screen name="relatorios" component={Relatorios} options={{title: 'Relatórios'}}/>
        </Tab.Navigator>
    )
}