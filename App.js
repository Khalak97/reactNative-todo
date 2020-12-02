import React, {useState} from 'react';
import {FlatList, Alert} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Wake up'},
    {id: uuidv4(), text: 'Learn React Native'},
    {id: uuidv4(), text: 'Write your app'},
    {id: uuidv4(), text: 'Walk'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        'Error',
        'Please write an item',
        [{text: 'Cancel'}, {text: 'OK'}],
        {cancelable: false},
      );
    } else {
      setItems((prevItems) => {
        return [{id: uuidv4(), text}, ...prevItems];
      });
    }
  };

  return (
    <>
      <Header title="Todo list" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </>
  );
};
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});
*/
export default App;
