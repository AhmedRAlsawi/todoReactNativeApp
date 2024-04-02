import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

function TodoItem({ item, pressHandler }) {
    return (
        <View style={styles.item}>
            <TouchableOpacity  >
                <MaterialIcons name="delete" size={18} color="#333" onPress={() => pressHandler(item.key)} />
            </TouchableOpacity>
            <Text >
                {item.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginTop: 16,
        padding: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10
        , flexDirection: "row",
        gap: 6
    }
})

export default TodoItem