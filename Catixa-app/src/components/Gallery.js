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
          autoPlayWithInterval={3000}
          images={images}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (

            <View
              key={index}
              style={[
                style,
                styles.customSlide,
                { backgroundColor: index % 2 === 0 ? 'white' : 'white' },
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
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  slider: { backgroundColor: '#000', height: 690 },
  content1: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content2: {
    width: '200%',
    height: 100,
    marginTop: 10,
    backgroundColor: '#000',
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
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: 393,
    height: 600,
  },
});

