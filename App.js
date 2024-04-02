import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';
import TodoItem from './components/TodoItem/TodoItem';

export default function App() {
  const [items, setItems] = useState([])

  // Sample of data
  // [
  //   { title: "Coffee", key: "1" },
  //   { title: "Bread", key: "2" },
  //   { title: "Juice", key: "3" }
  // ]

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.key != id))
  }

  const submitHandler = (val) => {
    const wordLen = 3
    console.log(val.length)
    if (val.length > wordLen) {
      setItems((prevItems) => [
        ...prevItems, {
          title: val, key: Math.random().toString()
        }
      ])
    }
    else {
      //title,message,btn internal text
      Alert.alert("Attempt faild.", `Minimum chars are ${wordLen}`,
        [
          { text: "Try again" }
        ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddItem submitHandler={submitHandler} />
          <View>
            {items.length === 0 ?
              <Text style={styles.noItems}>
                add your first todo
              </Text>
              :
              <FlatList
                data={items}
                renderItem={({ item }) =>
                  <TodoItem item={item} pressHandler={deleteItem} />
                }
              />}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  noItems: {
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 22,
    textTransform: 'capitalize',
    textAlign: "center"
  }
});
