import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import global from '../../global';

export default ({placeholder, search, setSearch}) => {
    return (
        <View style={styles.container}>
            <Feather name="search" style={styles.icon}/>
            <TextInput style={styles.input} placeholder={placeholder} value={search} onChangeText={setSearch} placeholderTextColor={global.colors.darkBlue}/>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: global.colors.lightBlue,
        borderRadius: 10,
        shadowColor: global.colors.darkBlue,
        elevation: 2
    },
    icon: {
        fontSize: 20,
        color: global.colors.darkBlue,
        margin: 10,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: global.colors.darkBlue,
        
    }
})