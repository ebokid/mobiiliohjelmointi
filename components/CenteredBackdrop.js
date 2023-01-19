import { StyleSheet, ImageBackground, Text } from 'react-native';

export default function CenteredBackdrop(props) {
  const {image, text, children} = props
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>{text}</Text>
        {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
      }
});