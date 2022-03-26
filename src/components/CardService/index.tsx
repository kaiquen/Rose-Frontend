import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import global from '../../global';
import { LinearGradient } from 'expo-linear-gradient';
import ModalServico from '../ModalServico';
import ModalTrash from '../ModalTrash';

export default ({item}) => {
    const [info, setInfo] = useState<boolean>(false);
    const [modalVisibleService, setModalVisibleService] = useState(false);
    const [modalVisibleTrash, setModalVisibleTrash] = useState(false);
    
    const handleInfo = () => {
        info === false ? setInfo(true) : setInfo(false)
    }

    return (
        <Pressable style={styles.container} onPress={() => setModalVisibleService(true)} onLongPress={() => setModalVisibleTrash(true)}>
            <View style={styles.clientBox} >
                <Text style={styles.name}>{item.nameservice}</Text>
                <Text style={styles.price}>R$ {item.priceservice}</Text>
            </View>
            <ModalServico modalVisible={modalVisibleService} setModalVisible={setModalVisibleService} item={item}/>
            <ModalTrash modalVisible={modalVisibleTrash} setModalVisible={setModalVisibleTrash} item={item}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        paddingVertical: '4.5%',
        paddingHorizontal: '3%',
        marginVertical: '1%',
        elevation: 1,
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderColor: global.colors.darkPink
    },
    clientBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 18,
        fontWeight: '500',
        color: '#666'
    },
    price: {
        fontSize: 18,
        fontWeight: '200',
        color: global.colors.darkBlue
    }
})