import React, {Component} from 'react';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import Main from "./src/Main";
import persist from "./src/config/store";
import initFirebase from "./src/config/firebase";


const persistStore = persist();
initFirebase();


  
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

