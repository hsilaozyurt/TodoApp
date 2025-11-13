import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (!todoText.trim()) {
      console.log('Empty todo, not added.');
      return;
    }

    console.log('New todo:', todoText);
    setTodoText(''); 
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>My Todo List</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            value={todoText}
            onChangeText={setTodoText}
            returnKeyType="done"
          />
          <Button title="Add" onPress={handleAddTodo} />
        </View>

        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f0f2f5', 
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
});
