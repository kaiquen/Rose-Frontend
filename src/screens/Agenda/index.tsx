import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Agenda from '../../components/CardAgenda';
import ButtonPlus from '../../components/ButtonPlus';
import Calendar from '../../components/Calendar';
import global from '../../global';
import CardAgenda from '../../components/CardAgenda';


export default () => {
    return (
        <View style={styles.container}>
            <Calendar />
            <CardAgenda/>
            <ButtonPlus screen="createAgenda"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
})