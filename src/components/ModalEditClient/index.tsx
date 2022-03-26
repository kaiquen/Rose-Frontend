import React, { useContext, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import global from '../../global';
import { api } from '../../services/api';
import { UseAgenda } from '../../context/AgendaContex';

export default ({modalVisible, setModalVisible, item}) => {
    const [name, setName] = useState(item.nameclient);
    const [email, setEmail] = useState(item.emailclient);
    const [phone, setPhone] = useState(item.phoneclient);

    const {getClient} = useContext(UseAgenda);

    const handleUpdate = async() => {
        try {
            const response = await  api.patch('/client', {
                idclient: item.idclient,
                nameclient: name,
                emailclient: email,
                phoneclient: phone
            });

            getClient();
            setModalVisible(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.container}>
                <View style={styles.group}>
                    <Feather name="user" style={styles.icon}/>
                    <TextInput style={styles.input} placeholder="Nome do cliente" keyboardType='name-phone-pad' value={name} onChangeText={setName}/>
                </View>
                <View style={styles.group}>
                    <Feather name="smartphone" style={styles.icon}/>
                    <TextInput style={styles.input} placeholder="Celular" keyboardType='phone-pad' value={phone} onChangeText={setPhone} maxLength={11}/>
                </View>
                <View style={styles.group}>
                    <Feather name="mail" style={styles.icon}/>
                    <TextInput style={styles.input} placeholder="Celular" keyboardType='phone-pad' value={email} onChangeText={setEmail}/>
                </View>
                <View style={[styles.group, {marginTop: 10, borderWidth: 0, padding: 0, flexDirection: 'row', marginBottom: 0}]}>
                    <TouchableOpacity activeOpacity={.8} style={[styles.btn, {backgroundColor: '#fff'}]} onPress={() => setModalVisible(false)}>
                        <Text style={[styles.btnText, {color: global.colors.darkPink}]}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} style={styles.btn} onPress={handleUpdate}>
                        <Text style={styles.btnText}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '50%',
        width: '100%',
        backgroundColor: '#fff',
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        elevation: 10,
        shadowColor: global.colors.darkPink,
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        borderWidth: 2,
        borderColor: '#99999920',
        borderRadius: 10,
        padding: 5
    },
    icon:{
        fontSize: 20,
        margin: 10,
        color: global.colors.darkPink,
    },
    input: {
        flex: 1,
        fontSize: 20,
        color: '#000'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: global.colors.darkPink,
        paddingVertical: 15,
        borderRadius: 10
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
})