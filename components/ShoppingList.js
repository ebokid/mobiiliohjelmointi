import React, {useState} from 'react';
import {SafeAreaView, Button, View, Text, StyleSheet, TextInput, FlatList} from 'react-native';

export default function ShoppingList() {

    const [itemInput, setItemInput] = useState(null)
    const [shoppingList, setShoppingList] = useState([])

    const addToList = () => {
        if (!itemInput) return
        shoppingList.push(itemInput)
        setShoppingList(shoppingList)
        setItemInput(null)
    }

    const clearList = () => {
        setShoppingList([])
    }

    const Item = ({title, index}) => ( 
      <View key={title+index} style={styles.historyContainer} >
        <Text style={styles.historyItem}>{title}</Text>
      </View>
    );
  
    return (
      <SafeAreaView>
        <TextInput
          style={[styles.input, styles.bag]}
          onChangeText={input => setItemInput(input)}
          value={itemInput}
          keyboardType="text"
        />
        <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
                <Button color='#4B637A' title="Add" onPress={() => addToList()}>Button</Button>
            </View>
            <View style={styles.buttonStyle}>
                <Button color='#4B637A' title="Clear" onPress={() => clearList()}>Button</Button>
            </View>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.historyItem}>Shopping List</Text>
        </View>
          <FlatList
            data={shoppingList}
            renderItem={({item, index}) => <Item title={item} index={index} />}
          />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 22,
    color: '#fff',
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#000000c0',
  }, 
  text: {
    color: '#fff',
    margin: 20,
    fontSize: 30
  }, 
  buttonContainer: {
    flexDirection:"row",
    justifyContent: "center"
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5,
    height: 100,
    width: 100,
  },
  historyContainer: {
    flexDirection:"row",
    justifyContent: "center"
  },
  historyItem: {
    color: '#fff',
    margin: 5
  }
});