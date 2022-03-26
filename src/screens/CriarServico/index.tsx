import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import global from '../../global';
import {Feather} from '@expo/vector-icons';
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { UseAgenda } from '../../context/AgendaContex';

export default () => {
    const {setService, service} = useContext(UseAgenda);
    const [nameservice,setNameService] = useState<string>('');
    const [priceservice,setPriceService] = useState<string>('');
    const [error, setErrot] = useState();
    const navigation = useNavigation();

    const handleRegister = async() => {
        try {
            const response = await api.post('/service', {
                nameservice,
                priceservice
            })
            console.log(response.data)
            setService([...service,response.data]);
            setNameService('');
            setPriceService('');
            navigation.goBack();
        } catch (error) {
            setErrot(error.data);
        }
    }

    return (
        <View  style={styles.container}>
            <View style={styles.group}>
                <Feather name="edit-3" style={styles.icon}/>
                <TextInput style={styles.input} placeholder="Nome do servço" value={nameservice} onChangeText={setNameService}/>
            </View>
            <View  style={styles.group}>
                <Feather name="dollar-sign" style={styles.icon}/>
                <TextInput style={styles.input} placeholder="Valor cobrado (R$)" keyboardType='number-pad' value={priceservice} onChangeText={setPriceService}/>
            </View>
            {
                error && 
                <View style={[styles.group, {marginVertical: 0, borderWidth: 0}]}>
                    <Text style={styles.error}>* {error}</Text> 
                </View> 
            }
            <View style={[styles.group, {marginTop: 10, borderWidth: 0, padding: 0}]}>
                    <TouchableOpacity activeOpacity={.8} style={styles.btn} onPress={handleRegister}>
                        <Text style={styles.btnText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: '5%',
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
    error: {
        color: 'red'
    }
})