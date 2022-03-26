import React, { useContext, useEffect } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UseAgenda } from '../../context/AgendaContex';
import global from '../../global';
import { api } from '../../services/api';

export default ({modalVisible, setModalVisible, item}) => {
    const {client,getClient, setClient} = useContext(UseAgenda);
    const handleTrash = async () => {

        try {
            const response = await api.delete('/client', {
                    data: {
                        idclient: item.idclient
                    }
                });

                getClient();
                setModalVisible(false);
        } catch (error) {
            console.log(error)
        }
    };
   

   return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={[styles.group, {justifyContent: 'flex-end'}]}>
                        <Text style={styles.message}>Tem certeza que deseja excluir?</Text>
                    </View>
                    <View style={[styles.group, {flexDirection: 'row', alignItems:'flex-end'}]}>
                        <TouchableOpacity style={styles.btnLeft} onPress={() => setModalVisible(false)}>
                            <Text style={[styles.btnText, {color: '#444'}]}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnRight} onPress={handleTrash}>
                            <Text style={styles.btnText}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: '#fff',
        width: '80%',
        height: '20%',
        borderRadius: 10,
        elevation: 10
    },
    group: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: '400',
        color: '#444'
    },
    btnLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderBottomLeftRadius: 10,
        
    },
    btnRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: global.colors.darkPink,
        paddingVertical: 10,
        borderBottomRightRadius: 10
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})