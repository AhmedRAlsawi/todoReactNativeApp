import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

function AddItem({ submitHandler }) {
    const [inputText, setInputText] = useState("")

    const changeInputHandler = (val) => {
        setInputText(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='yada yada yada...'
                onChangeText={changeInputHandler}
            />
            <Button title='Add new' color="orange" onPress={() => submitHandler(inputText)} disabled={!inputText} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "orange",

    }
})

export default AddItem