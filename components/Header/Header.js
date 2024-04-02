import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


function Header() {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                My todos
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: "orange",
        paddingTop: 40
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default Header