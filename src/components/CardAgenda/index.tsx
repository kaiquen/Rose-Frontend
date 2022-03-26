import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import global from '../../global';
import { daysShort } from '../../services/dateFormat';

const data = [
    {
        client: 'Maísa Lopes',
        service: 'Pedicúre',
        hours: '07:00'
    },
    {
        client: 'Ana Paula Nascente',
        service: 'Pedicúre',
        hours: '08:00'
    },
    {
        client: '',
        service: '',
        hours: '09:00'
    },
    {
        client: '',
        service: '',
        hours: '10:00'
    }
]

const Item = ({item}) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.data}>
                <View style={styles.hourBox}>
                    <Feather style={styles.hour} name="clock"/>
                    <Text style={styles.hour}>{item.hours}</Text>
                </View>
                <Text style={styles.client}>{item.client}</Text>
                <View style={styles.info}>
                    <View style={styles.serviceType}></View>
                    <Text style={styles.service}>{item.service}</Text>
                </View>
                
            </View>
            <View style={styles.bar}></View>
        </View>
    )
}

export default () => {
    const [agenda, setAgenda] = useState(data);

    return (
        <View style={styles.container}>
            <FlatList 
                style={{flex: 1, width: "100%",}}
                data={agenda} 
                renderItem={({item}) => <Item item={item} />}
                keyExtractor={(item, index) => item + index.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#fff',
        padding: '3%',
        marginVertical: '0.5%',
        marginHorizontal: '4%',
        borderRadius: 2,
        elevation: 1,
    },
    hourBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hour: {
        color: global.colors.darkGreen,
        fontSize: 16,
        fontWeight: '700',
        marginRight: 5
    },
    data: {
        flex: 1
    },
    client: {
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 1

    },
    service: {
        fontSize: 18,
        fontWeight: '900',
        color: '#999',
        letterSpacing: 1
    },
    serviceType: {
        width: 12,
        height: 12,
        borderRadius: 20,
        backgroundColor: 'purple',
        elevation: 1,
        marginRight: 10,
    },
    bar: {
        height: '95%',
        width: '2%',
        backgroundColor: 'purple',
        borderRadius: 20,
    }
})