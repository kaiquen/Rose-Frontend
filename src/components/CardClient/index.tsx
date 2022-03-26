import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import {Feather} from '@expo/vector-icons';
import global from '../../global';
import { LinearGradient } from 'expo-linear-gradient';
import { api } from '../../services/api';
import ModalAlert from '../ModalTrash';
import ModalEditClient from '../ModalEditClient';
import ModalTrash from '../ModalTrash';
export default ({item}) => {
    const [info, setInfo] = useState<boolean>(false);
    const [modalVisibleTrash, setModalVisibleTrash] = useState<boolean>(false);
    const [modalVisibleEdit, setModalVisibleEdit] = useState<boolean>(false);
    
    const handleInfo = () => {
        info === false ? setInfo(true) : setInfo(false)
    };

    return (
        <View style={styles.container}>
            <View style={styles.clientBox}>
                <Text style={styles.name}>{item.nameclient}</Text>
                <TouchableOpacity style={styles.iconBox} onPress={handleInfo}>
                    {
                        info ? <Feather name="chevron-up" style={styles.icon}/> : <Feather name="chevron-down" style={styles.icon} />
                    }
                </TouchableOpacity>
            </View>
            {
                info &&
                <View style={styles.info}>
                    <View style={styles.group}>
                        <Feather name="smartphone" style={styles.infoIcon}/>
                        <Text style={styles.infoText}>{item.phoneclient}</Text>
                    </View>
                    <View style={styles.group}>
                        <Feather name="mail" style={styles.infoIcon}/>
                        <Text style={styles.infoText}>{item.emailclient}</Text>
                    </View>
                    <View style={styles.group}>
                        <Feather name="calendar"style={styles.infoIcon}/>
                        <Text style={styles.infoText}>{String(item.birthclient).substring(0,10).split('-').reverse().join('/')}</Text>
                    </View>
                    <View style={styles.tools}>
                        <TouchableOpacity onPress={() => setModalVisibleEdit(true)}>
                            <Feather name="edit-2" style={styles.toolsIcon} color={global.colors.darkBlue}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisibleTrash(true)}>
                            <Feather name="trash-2" style={styles.toolsIcon} color="#e0313d"/>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            <ModalTrash modalVisible={modalVisibleTrash} setModalVisible={setModalVisibleTrash} item={item}/>
            <ModalEditClient modalVisible={modalVisibleEdit} setModalVisible={setModalVisibleEdit} item={item}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        padding: '3%',
        marginVertical: '1%',
        backgroundColor: '#fff',
        elevation: 1,
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
        fontWeight: '400',
        color: '#666'
    },
    iconBox: {
       paddingVertical:'2%'
    },
    icon: {
        fontSize: 18,
        color: global.colors.darkBlue
    },
    info: {
        
    },
    infoIcon: {
        fontSize: 18,
        marginRight: 10,
        color: global.colors.darkBlue
    },
    infoText:{
        fontSize: 18,
        color: '#666'
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    tools: {
        position: 'absolute',
        bottom: -10,
        right: 0,
       
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    },
    toolsIcon: {
        fontSize: 16,
        marginVertical: 10,
    }
})