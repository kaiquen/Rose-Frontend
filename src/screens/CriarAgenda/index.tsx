import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,ScrollView, TextInput } from 'react-native';
import { Calendar,CalendarList} from 'react-native-calendars';
import TagHour from '../../components/TagHour';
import global from '../../global';
import {Feather} from '@expo/vector-icons';

export default () => {
    return(
        <View style={styles.container}>
            <ScrollView 
            showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                paddingBottom: 30,
                }}>
                <View style={styles.calendar}>
                    <CalendarList 
                        pastScrollRange={0}
                        calendarHeight={350}
                        calendarWidth={350}
                        pagingEnabled
                        horizontal 
                        minDate={moment().format()}
                        markingType='custom'
                        theme={{
                            calendarBackground: global.colors.lightBlue,
                            selectedDayBackgroundColor: global.colors.darkPink,
                            selectedDayTextColor: '#fff',
                            textDisabledColor: '#d9dbe0',
                            todayTextColor: global.colors.darkPink,
                        }}    
                    />
                </View>
            
                <View style={styles.content}>
                    <View style={styles.groupClient}>
                        <Feather name="user" style={styles.icon}/>
                        <TextInput style={styles.input} placeholder="Cliente" keyboardType='name-phone-pad' />
                    </View>
                    <View style={styles.group}>
                        <TagHour hour='Manicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                        <TagHour hour='Pedicure'/>
                    </View>
                    <View style={styles.group}>
                        <TagHour hour='07:00'/>
                        <TagHour hour='08:00'/>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Agendar</Text>
                </TouchableOpacity>
            </ScrollView>   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: global.colors.lightBlue
        
    },
    calendar: {
        width: 350,
        height: 350
    },
    content: {
        height: 350,
        width: 350,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: '5%',
    },
    groupClient: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    group: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap:'wrap',
    },
    btn: {
        marginTop: 30,
        paddingVertical: 10,
        marginHorizontal: 20,
        backgroundColor: global.colors.darkPink,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnText: {
        fontSize: 20,
        color: '#fff',
    },
    icon:{
        fontSize: 20,
        marginRight: 10,
        color: global.colors.darkPink,
    },
    input: {
        flex: 1,
        fontSize: 20,
        color: '#000'
    },
})