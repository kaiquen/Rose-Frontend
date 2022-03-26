import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef } from 'react';
import { Image, StyleSheet, View, ActivityIndicator, Animated } from 'react-native';
import { UseAgenda } from '../../context/AgendaContex';
import global from '../../global';
import { api } from '../../services/api';

export default () => {
    const navigation = useNavigation<any>();
    const animatedOpacity = useRef(new Animated.Value(0)).current
    const animatedTranslate = useRef(new Animated.Value(100)).current


    useEffect(() => {   
        Animated.timing(
            animatedOpacity,
            {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
            }
        ).start();

        Animated.timing(
            animatedTranslate,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();

        navigation.navigate('home');
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Image style={
                [styles.image, {
                    opacity: animatedOpacity, 
                    transform: [{translateY: animatedTranslate}]}]} source={require('../../assets/nail4.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: global.colors.darkBlue
    },
    image: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain',
    }
})