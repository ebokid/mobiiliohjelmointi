import React, {useState} from 'react';
import {SafeAreaView, Button, View, Text, StyleSheet, TextInput, Alert} from 'react-native';

export default function NumberGuess() {

    const defaultMessage = 'Guess a number between 1-100'
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [message, setMessage] = useState(defaultMessage)
    const [guess, setGuess] = useState(null)
    const [guessCount, setGuessCount] = useState(0)

    const showMessageAndReset = guesses => {
        Alert.alert('You guessed the number in ' + guesses + ' guesses')
        setGuessCount(0)
        setMessage(defaultMessage)
        setNumber(Math.floor(Math.random() * 100) + 1)
    }

    const guessAndIncrement = () => {
        if (null) {
            setMessage(defaultMessage) 
            return
        }
        if (guess === number)  {
            showMessageAndReset(guessCount + 1)
            return
        }
        setGuessCount(guessCount + 1)
        if (guess < number) setMessage('Your guess ' + guess + ' is too low')
        else setMessage('Your guess ' + guess + ' is too high')
    }

  
    return (
      <SafeAreaView>
        <Text
          style={styles.text}
        >{message}</Text>
        <TextInput
          style={[styles.input, styles.bag]}
          onChangeText={n => setGuess(parseInt(n))}
          value={guess}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
                <Button color='#4044BA' title="Make A guess" onPress={guessAndIncrement}>Button</Button>
            </View>
        </View>
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
    marginTop: 5
  }
});