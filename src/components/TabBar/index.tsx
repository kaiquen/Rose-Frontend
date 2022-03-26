import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons'
import global from '../../global';

export default ({state, navigation, descriptors}:BottomTabBarProps) => {
    const goTo = (screenName: string) => {
        navigation.navigate(screenName)
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.btn} onPress={() => goTo('agenda')} >
                <Feather name='calendar' style={state.index === 0? styles.iconActive:styles.icon }/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => goTo('servicos')}>
                <Feather name='clipboard' style={state.index === 1? styles.iconActive:styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => goTo('caixa')}>
                <Feather name='dollar-sign' style={state.index === 2? styles.iconActive:styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => goTo('clientes')}>
                <Feather name='users' style={state.index === 3? styles.iconActive:styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => goTo('relatorios')}>
                <Feather name='bar-chart-2' style={state.index === 4? styles.iconActive:styles.icon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        height: '7%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 10,
        shadowColor: global.colors.darkPink
    }, 
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: global.colors.lightPink,
        fontSize: 25,
    },
    iconActive: {
        color: global.colors.darkPink,
        fontSize: 25,
    }
})