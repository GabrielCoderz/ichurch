import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Sugestoes = ({ id }) => {
    return(
        <View>
            <Text style={styles.text}>
                { id }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'white',
    }
})


export default Sugestoes;