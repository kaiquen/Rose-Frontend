import {createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
export const UseAgenda = createContext({} as IProvider);

export default ({children}) => {
    const [client, setClient] = useState<IClient[]>([]);
    const [agenda, setAgenda] = useState<IAgenda[]>([]);
    const [filter, setFilter] = useState<IAgenda[]>([]);
    const [service, setService] = useState<IService[]>([]);

    const getClient = async ():Promise<void> => {
        try {
            const response = await api.get('/client');
            setClient(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getService = async ():Promise<void> => {
        try {
            const response = await api.get('/service');
            setService(response.data);
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getClient();
        getService();
    }, []);
    
    return (
        <UseAgenda.Provider value={{client, setClient, service, setService, getClient}}>
            {children}
        </UseAgenda.Provider>
    )
}  

interface IProvider {
    getClient();
    client?: IClient[],
    agenda?: IAgenda[];
    filter?: IAgenda[];
    service?: IService[];
    setService?: React.Dispatch<React.SetStateAction<IService[]>>;
    setFilter?: React.Dispatch<React.SetStateAction<IAgenda[]>>;
    setClient?: React.Dispatch<React.SetStateAction<IClient[]>>;
}

interface IAgenda {
    date: Date;
    hour: number;
    data: {
        client: string;
        price: number;
        service: string    }
}

interface IService {
    idservice:string;
    nameservice:string;
    priceservice: number;
}

interface IClient {
    idclient?:string;
    nameclient:string;
    phoneclient:string;
    birthclient:Date;
    emailclient:string;
}

