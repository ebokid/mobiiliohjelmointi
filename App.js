import React from 'react';
import {
StyleSheet,
Dimensions,
} from 'react-native';
import ViewSlider from 'react-native-view-slider'
import ViewBox from './components/ViewBox';

import Calculator from './components/Calculator';
import NumberGuess from './components/NumberGuess';

const blocks = require('./assets/images/blocks.png');
const lens = require('./assets/images/lens.png');


const { height } = Dimensions.get('window');


function App() {
  return (
    <>
      <ViewSlider 
        renderSlides = {
          <>
            <ViewBox image={blocks}><Calculator/></ViewBox>
            <ViewBox image={lens}><NumberGuess/></ViewBox>
         </> 
      }
      style={styles.slider}
      height = {height}
      slideCount = {2} 
      dots = {true}
      dotActiveColor = 'red'
      dotInactiveColor = 'gray'
      dotsContainerStyle={styles.dotContainer}
     />
</>
  );
};

const styles = StyleSheet.create({
  slider: {
      flex: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center'
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 25
  }
});

export default App;