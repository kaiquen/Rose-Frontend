import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ButtonPlus from '../../components/ButtonPlus';
import CardService from '../../components/CardService';
import ModalServico from '../../components/ModalServico';
import Search from '../../components/Search';
import { UseAgenda } from '../../context/AgendaContex';

export default () => {
    const {service} = useContext(UseAgenda);
    const [serviceFilter, setServiceFilter] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        const filter = service.filter((item) => item.nameservice.toLowerCase().includes(search.toLowerCase()));
        setServiceFilter(filter);
        console.log(filter);
    }
    useEffect(() => {
        handleSearch();
    },[search])

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Search placeholder="Buscar pelo serviço" search={search} setSearch={setSearch}/>    
            </View>
            {
                service.length !== 0 ? 
                <FlatList 
                style={{flex: 1, width: "100%",}}
                data={serviceFilter && serviceFilter.length > 0 ? serviceFilter : service} 
                renderItem={({item}) => <CardService item={item}/>}
                keyExtractor={(item, index) => item + index.toString()}
                extraData
                showsVerticalScrollIndicator={false}
                />:
                <View style={styles.info}>
                    <Text style={styles.text}>Nenhum serviço foi encontrado.</Text>
                    <Text style={styles.text}>Toque no ícone + abaixo para criar um novo serviço.</Text>
                </View>
            }
            <ButtonPlus screen="createService"/>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: '3%',
    },
    search: {
        width: '100%',
        height: 60,
        margin: 20,
    },
    info: {
        flex: 1,
        padding: '3%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#444',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})