import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import global from '../../global';
import { api} from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { UseAgenda } from '../../context/AgendaContex';

export default () => {
    const navigation = useNavigation();
    const [name,setName] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState('Data de nascimento');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    
    const [show, setShow] = useState(false);
    const {getClient} = useContext(UseAgenda);
    
    const handleDatePicker = (event, selectedDate) => {
        const currentDate = selectedDate
        console.log(event.type)
        setShow(false);
        switch(event.type) {
            case 'set': {
                setBirth(currentDate.toISOString().substring(0,10).split('-').reverse().join('/'));
                break;
            };
            case 'dismissed': {
                setBirth(new Date().toISOString().substring(0,10).split('-').reverse().join('/'));
                break;
            }
            default: {
                setBirth('Data de nascimento');
            }
        }
    }

    const handleRegister = async () => {
        try {
            const response = await api.post('/client', {
                nameclient:name,
                phoneclient:phone,
                birthclient:birth,
                emailclient:email
            });

            setName('');
            setPhone('');
            setEmail('');
            setBirth('');
     
            getClient();
            navigation.goBack();
        } catch (error) {
            setError(error.response.data);
        }
    }

   

    return (
        <View style={styles.container}>
                {   
                    show && 
                    <DateTimePicker
                        value={new Date()}
                        mode='date'
                        is24Hour={true}
                        onChange={handleDatePicker} 
                        themeVariant='light'
                    />
                }
                <View style={styles.group}>
                    <Feather name="user" style={styles.icon}/>
                    <TextInput style={styles.input} placeholder="Nome do cliente" keyboardType='name-phone-pad' value={name} onChangeText={setName}/>
                </View>
                <View style={styles.group}>
                    <Feather name="smartphone" style={styles.icon}/>
                    <TextInput style={styles.input} placeholder="Celular" keyboardType='phone-pad' value={phone} onChangeText={setPhone} maxLength={11}/>
                </View>
                <View style={styles.group}>
                    <Feather name="calendar" style={styles.icon}/>
                    <TouchableOpacity style={styles.inputDate} onPress={() => setShow(true)}>
                        <Text style={styles.date}>{birth}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.group}>
                    <Feather name="mail" style={styles.icon}/>
                    <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={setEmail}/>
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
    },
    
    date: {
        fontSize: 20,
        color: '#999'
    },
    inputDate: {
        flex: 1,
        justifyContent: 'center'
    }
})