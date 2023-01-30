import React from 'react';
import {
StyleSheet,
Dimensions,
} from 'react-native';
import ViewSlider from 'react-native-view-slider'
import ViewBox from './components/ViewBox';

import Calculator from './components/Calculator';
import ShoppingList from './components/ShoppingList';

const blocks = require('./assets/images/blocks.png');
const hue = require('./assets/images/hue.jpg');


const { height } = Dimensions.get('window');


function App() {
  return (
    <>
      <ViewSlider 
        renderSlides = {
          <>
            <ViewBox image={blocks}><Calculator/></ViewBox>
            <ViewBox image={hue}><ShoppingList/></ViewBox>
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