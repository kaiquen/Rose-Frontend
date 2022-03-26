import React, { useContext, useEffect, useState } from 'react';

import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { UseAgenda } from '../../context/AgendaContex';
import CalendarStrip from 'react-native-calendar-strip';
import global from '../../global';
import moment from 'moment';


export default () => {
    const {agenda, setFilter} = useContext(UseAgenda);
    const [items, setItems] = useState<any>([]);
    
    useEffect(() => {

    },[]);

    const datesWhitelist = [
      {
        start: moment(),
        end: moment().add(365, 'days') 
      }
    ];

    return (
        <View style={styles.container}>
            <CalendarStrip 
            style={styles.calendar}
              calendarAnimation={{ type: 'sequence', duration: 30 }}
              daySelectionAnimation={{
                type: 'background',
                duration: 200,
                highlightColor: ''
              }}
              calendarHeaderStyle={{ color: '#000000' }}
              dateNumberStyle={{ color: '#000000', paddingTop: 10 }}
              dateNameStyle={{ color: '#BBBBBB' }}
              highlightDateNumberStyle={{
                color: '#fff',
                backgroundColor: global.colors.darkPink,
                marginTop: 10,
                height: 35,
                width: 35,
                textAlign: 'center',
                borderRadius: 17.5,
                overflow: 'hidden',
                paddingTop: 6,
                fontWeight: '400',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              highlightDateNameStyle={{ color: global.colors.darkPink }}
              disabledDateNameStyle={{ color: 'grey' }}
              disabledDateNumberStyle={{ color: 'grey', paddingTop: 10 }}
              datesWhitelist={datesWhitelist}
              iconContainer={{ flex: 0.1 }}
              selectedDate={new Date()}

          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
      },
      calendar:{
        height: 150,
        paddingTop: 20,
        paddingBottom: 20
      },
      item: {
          backgroundColor: 'white',
          flex: 1,
          borderRadius: 5,
          padding: 10,
          marginRight: 10,
          marginTop: 17
      },
})