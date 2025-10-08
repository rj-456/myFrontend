import React from 'react'
import {View, Text, Button} from 'react-native'

import styles from '../styles';

export default function Homepage ({navigation}) { 
    return (
        <View style={styles.container}>

            <View style={styles.homeCard}>
                <Text style={styles.header}>Homepage</Text>

                <View>
                    <Button 
                    style={styles.button} 
                    title='Register'
                    color="#0030c0ff"
                    onPress={() => navigation.navigate('Register')} />
                </View>
                <View>
                    <Button 
                    title='View User'
                    color="#5f85e6ff"
                    onPress={() => navigation.navigate('UserList')}/>
                </View>
            </View>
        </View>
    ); 
}

