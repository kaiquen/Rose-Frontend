import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import global from '../../global';

export default ({hour}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.hour}>{hour}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        height: 22,
        marginRight: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: global.colors.darkBlue,
        elevation: 1
    },
    hour: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }

})