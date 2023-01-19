import React from 'react';
import {
StyleSheet,
View,
Dimensions,
ImageBackground
} from 'react-native';

const { width} = Dimensions.get('window');

export default function ViewBox(props) {
    const {image, children} = props
    return (<>
        <View style={styles.viewBox}><ImageBackground source={image} resizeMode="cover" style={styles.image}>{children}</ImageBackground></View>
    </>)

}

const styles = StyleSheet.create({
    viewBox: {
        flex: 1,
        justifyContent: 'center',
        width: width,
        alignItems: 'center',
        height: "100%"
    },
    image: {
      height: '100%',
      width:'100%',
      flex: 1,
      justifyContent: 'center',
    }
  });