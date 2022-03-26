import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ButtonPlus from '../../components/ButtonPlus';
import CardClient from '../../components/CardClient';
import Search from '../../components/Search';
import { UseAgenda } from '../../context/AgendaContex';
import global from '../../global';
import { api } from '../../services/api';

//Nenhum cliente foi encontrado.
//Toque no ícone + abaixo para cadastrar um novo cliente.
export default () => {
    const {client} = useContext(UseAgenda);
    const [search, setSearch] = useState<string>('');
    const [clientFilter, setClientFilter] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearch = () => {
        const filter = client.filter(item => item.nameclient.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        setClientFilter(filter);
    }

    useEffect(() => {
        handleSearch();
    }, [search]);

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Search placeholder="Buscar pelo nome" search={search} setSearch={setSearch}/>
            </View>
            {
                client.length !== 0 ? 
                <FlatList 
                    style={{flex: 1, width: "100%",}}
                    data={clientFilter && clientFilter.length > 0 ? clientFilter : client} 
                    renderItem={({item}) => <CardClient item={item}/>}
                    keyExtractor={(item, index) => item + index.toString()}
                    extraData
                    showsVerticalScrollIndicator={false}
                    />
                : <View style={styles.info}>
                    <Text style={styles.text}>Nenhum cliente foi encontrado.</Text>
                    <Text style={styles.text}>Toque no ícone + abaixo para cadastrar um novo cliente.</Text>
                </View>
            }
            <ButtonPlus screen="createClient"/>
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