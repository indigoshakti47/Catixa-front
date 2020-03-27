import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import ImageSlider from 'react-native-image-slider';

export default class App extends Component<{}> {
  render() {
    const images = [
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/people',
      'https://placeimg.com/640/640/animals',
      'https://placeimg.com/640/640/beer',
    ];

    return (
      <View style={styles.container} onStartShouldSetResponder={() => this.props.navigation.navigate('Rate')}>
        <View style={styles.content1}>
          <Text style={styles.contentText}></Text>
        </View>
        <ImageSlider
          loop
          autoPlayWithInterval={5000}
          images={images}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (

            <View
              key={index}
              style={[
                style,
                styles.customSlide,
              ]}
            >
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}

          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {''}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
        <View style={styles.content2}>
          <Text style={styles.contentText}></Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1,
    backgroundColor: '#182c4d',
    alignItems: 'center'
  },
  slider: { backgroundColor: '#182c4d', height: 'auto' },
  content1: {
    width: '100%',
    backgroundColor: '#182c4d'
  },
  content2: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#182c4d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: { color: '#fff' },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 1,
    color: 'red',
  },
  customSlide: {
    backgroundColor: '#182c4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: 393,
    height: 600,
  },
});

