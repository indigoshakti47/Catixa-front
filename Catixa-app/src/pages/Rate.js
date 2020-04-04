import React from 'react';
import { PixelRatio, StyleSheet, Text, View, PanResponder, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';
import firebase from 'firebase/app';
import Modal from 'react-native-modal';

const REACTIONS = [
  { label: "Malo", src: require('./assets/worried.png'), bigSrc: require('./assets/worried_big.png') },
  { label: "Regular", src: require('./assets/sad.png'), bigSrc: require('./assets/sad_big.png') },
  { label: "Bueno", src: require('./assets/smile.png'), bigSrc: require('./assets/smile_big.png') },
  { label: "Excelente", src: require('./assets/ambitious.png'), bigSrc: require('./assets/ambitious_big.png') },
];
const WIDTH = 320;
const DISTANCE = WIDTH / REACTIONS.length;
const END = WIDTH - DISTANCE;

var userR;
var rate;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this._pan = new Animated.Value(1.9 * DISTANCE, { duration: 5000 });
  }

  state = {
    modalVisible: false,
  }


  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this._pan.setOffset(this._pan._value);
        this._pan.setValue(30);
      },
      onPanResponderMove: Animated.event([null, { dx: this._pan }]),
      onPanResponderRelease: () => {
        this._pan.flattenOffset();

        let offset = Math.max(0, this._pan._value + 0);
        if (offset < 0) return this._pan.setValue(0);
        if (offset > END) return this._pan.setValue(END);

        const modulo = offset % DISTANCE;
        offset = (modulo >= DISTANCE / 2) ? (offset + (DISTANCE - modulo)) : (offset - modulo);

        this.updatePan(offset);
      }
    });
  }

  toggleModal() {

    this.setState({ modalVisible: true });
  }

  toggleModa1() {
    this.setState({ modalVisible: false });
  }

  updatePan(toValue) {
    Animated.spring(this._pan, { toValue, friction: 7, duration: 5000 }).start();
    this.toggleModal()

    if (toValue == 0) {
      rate = 1;
    }
    if (toValue == 80) {
      rate = 2;
    }
    if (toValue == 160) {
      rate = 3;
    }
    if (toValue == 240) {
      rate = 4;
    }

    var user = firebase.auth().currentUser;
    if (user == null){
      console.log("Ningun usuario ha iniciado sesion");
      return;
    }

    firebase.firestore().collection('ratings').add({
      user: user.uid,
      rate: rate
    }).then(console.log('INSERTED !')).catch(error => console.log(error));

  }

  render() {
    return (



      <View style={styles.container}>
        <View style={styles.wrap}>
          <Text style={styles.welcome}>
            ¿Qué te pareció?
          </Text>

          <View style={styles.line} />

          <View style={{ flex: 1 }}>
            <Modal animationType={"slide"}
              visible={this.state.modalVisible}
              onRequestClose={() => { this.props.navigation.navigate('gallery'); }}>

              <View style={styles.modal}>
                <Text style={styles.text}>¡Gracias por calificar!</Text>

                <TouchableOpacity onPress={() => {
                  this.toggleModa1();
                  this.props.navigation.navigate('gallery');
                }} style={styles.button}>

                  <Text style={styles.buttonText}>Entendido</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>

          <View style={styles.reactions}>
            {REACTIONS.map((reaction, idx) => {
              const u = idx * DISTANCE;
              let inputRange = [u - 20, u, u + 20];
              let scaleOutputRange = [1, 0.25, 1];
              let topOutputRange = [0, 10, 0];
              let colorOutputRange = ['#999', '#222', '#999'];

              if (u - 20 < 0) {
                inputRange = [u, u + 20];
                scaleOutputRange = [0.25, 1];
                topOutputRange = [10, 0];
                colorOutputRange = ['#222', '#999'];
              }

              if (u + 20 > END) {
                inputRange = [u - 20, u];
                scaleOutputRange = [1, 0.25];
                topOutputRange = [0, 10];
                colorOutputRange = ['#999', '#222'];
              }


              return (
                <TouchableOpacity onPress={() => this.updatePan(u)} activeOpacity={0.9} key={idx}>
                  <View style={styles.smileyWrap}>
                    <Animated.Image
                      source={reaction.src}
                      style={[styles.smiley, {
                        transform: [{
                          scale: this._pan.interpolate({
                            inputRange,
                            outputRange: scaleOutputRange,
                            extrapolate: 'clamp',
                            duration: 4000
                          })
                        }]
                      }]}
                    />
                  </View>

                  <Animated.Text style={[styles.reactionText, {
                    top: this._pan.interpolate({
                      inputRange,
                      outputRange: topOutputRange,
                      extrapolate: 'clamp',
                      duration: 3000
                    }),
                    color: this._pan.interpolate({
                      inputRange,
                      outputRange: colorOutputRange,
                      extrapolate: 'clamp',
                      duration: 2000
                    })
                  }]}>
                    {reaction.label}
                  </Animated.Text>
                </TouchableOpacity>
              );
            })}
            <Animated.View {...this._panResponder.panHandlers} style={[styles.bigSmiley, {
              transform: [{
                translateX: this._pan.interpolate({
                  inputRange: [0, END],
                  outputRange: [0, END],
                  extrapolate: 'clamp',
                  duration: 4000
                })
              }]
            }]}>
              {REACTIONS.map((reaction, idx) => {
                let inputRange = [(idx - 1) * DISTANCE, idx * DISTANCE, (idx + 1) * DISTANCE];
                let outputRange = [0, 1, 0];

                if (idx == 0) {
                  inputRange = [idx * DISTANCE, (idx + 1) * DISTANCE];
                  outputRange = [1, 0];
                }

                if (idx == REACTIONS.length - 1) {
                  inputRange = [(idx - 1) * DISTANCE, idx * DISTANCE];
                  outputRange = [0, 1];
                }
                return (
                  <Animated.Image
                    key={idx}
                    source={reaction.bigSrc}
                    style={[styles.bigSmileyImage, {
                      opacity: this._pan.interpolate({
                        inputRange,
                        outputRange,
                        extrapolate: 'clamp',
                        duration: 4000
                      })
                    }]}
                  />
                );
              })}
            </Animated.View>
          </View>
        </View>
      </View>
    );
  }
}

const size = 42;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modal: {

    alignItems: 'center',
    padding: 70,
    position: 'relative',
    backgroundColor: 'white',
  },
  text: {
    color: '#000000',
    marginTop: 10,
    fontSize: 25,
    fontWeight: '400',
  },
  wrap: {
    width: WIDTH,
    marginBottom: 50,
  },
  welcome: {
    fontSize: 19,
    textAlign: 'center',
    color: '#777',
    fontWeight: '600',
    fontFamily: 'Avenir',
    marginBottom: 50,
  },
  reactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  smileyWrap: {
    width: DISTANCE,
    height: DISTANCE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smiley: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: '#c7ced3',
  },
  bigSmiley: {
    width: DISTANCE,
    height: DISTANCE,
    borderRadius: DISTANCE / 2,
    backgroundColor: '#ffb18d',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bigSmileyImage: {
    width: DISTANCE,
    height: DISTANCE,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  reactionText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#999',
    fontWeight: '400',
    fontFamily: 'Avenir',
    marginTop: 5,
  },
  line: {
    height: 4 / PixelRatio.get(),
    backgroundColor: '#eee',
    width: WIDTH - (DISTANCE - size),
    left: (DISTANCE - size) / 2,
    top: DISTANCE / 2 + (2 / PixelRatio.get()),
  },
  button: {
    width: 200,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    borderRadius: 20,
    marginTop: 18
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    borderRadius: 50,
  }
});

