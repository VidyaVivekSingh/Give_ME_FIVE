import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const circle = ({
    word = 'Default', color
}) => (
        <View style={{ padding: 9 }}>
            <View style={[{
                ...styles.circle,
                backgroundColor: color ? 'red' : 'transparent'
            }]}>
                <Text style={{ fontSize: 25 }}>{word}</Text>
            </View>
        </View>
    );

const styles = StyleSheet.create({
    circle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        borderColor: 'red',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default circle;
