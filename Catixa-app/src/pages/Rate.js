import React from 'react';
import { PixelRatio, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import firebase from 'firebase/app';
import Modal from 'react-native-modal';

const REACTIONS = [
  { label: "Malo", src: require('./assets/worried.png'), bigSrc: require('./assets/worried_big.png') },
  { label: "Regular", src: require('./assets/sad.png'), bigSrc: require('./assets/sad_big.png') },
  { label: "Bueno", src: require('./assets/smile.png'), bigSrc: require('./assets/smile_big.png') },
  { label: "Excelente", src: require('./assets/ambitious.png'), bigSrc: require('./assets/ambitious_big.png') },
];
const WIDTH = Math.round(Dimensions.get('window').width);;
const DISTANCE = WIDTH * .7 / REACTIONS.length;

export default class App extends React.Component {
  state = {
    modalVisible: false,
    selectedRate: null
  }

  toggleModal() {
    this.setState({ modalVisible: true });
  }

  toggleModa1() {
    this.setState({ modalVisible: false });
  }

  updatePan(rate) {
    setTimeout(() => {
      this.toggleModal();
    }, 1500);
    rate++;
    this.setState({ selectedRate: rate });
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
      <>
      <View>
        <Modal animationType={"slide"}
        coverScreen={true}
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
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Text style={styles.welcome}>
            ¿Qué te pareció?
          </Text>

          <View style={styles.line} />

          <View style={styles.reactions}>
            {REACTIONS.map((reaction, idx) => {
              return (
                <TouchableOpacity onPress={() => this.updatePan(idx)} activeOpacity={0.9} key={idx}>
                  <View style={styles.smileyWrap}>
                    <Image
                      style={{width: DISTANCE -10, height: DISTANCE - 10}}
                      source={idx + 1 === this.state.selectedRate ? reaction.bigSrc : reaction.src}
                    />
                  </View>
                  <Text style={styles.reactionText}>
                    {reaction.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </>);
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
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height,
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
    marginBottom: 50,
  },
  reactions: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  smileyWrap: {
    paddingHorizontal: 15,
    width: DISTANCE,
    height: DISTANCE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reactionText: {
    top: 20,
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
    color: '#999',
    marginTop: 5,
  },
  line: {
    height: 4 / PixelRatio.get(),
    backgroundColor: '#eee',
    width: WIDTH - (DISTANCE - size) - 60,
    left: ((DISTANCE - size) / 2) + 30,
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

