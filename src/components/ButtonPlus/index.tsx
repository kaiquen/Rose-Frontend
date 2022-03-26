import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Pressable, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import global from '../../global';
import { useNavigation } from '@react-navigation/native';

export default ({screen}) => {
    const animated = useRef(new Animated.Value(100)).current;
    const navigation = useNavigation<any>();
    const PressableAnimated = Animated.createAnimatedComponent(Pressable)

    useEffect(() => {
        Animated.spring(
            animated,
            {
                toValue: 0,
                useNativeDriver: true,
                
            }
        ).start();
       
    }, [])
    
    return (
        <PressableAnimated style={[styles.btn, {transform: [{translateY:animated}]}]} onPress={() => navigation.navigate(screen)}>
            <Feather name="plus" size={20} color="white"/>
        </PressableAnimated>     
    );
}

const styles = StyleSheet.create({
    btn: {
        position: 'absolute',
        right: '4%',
        bottom: '2%',
        
        backgroundColor: global.colors.darkPink,
        borderRadius: 100,
        padding: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
    }
})