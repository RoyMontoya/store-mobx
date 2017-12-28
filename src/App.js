import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas'

class App extends Component {
  render() {
    const {counter} = this.props;
    return (
      <div>
        <Canvas/>
      </div>
    );
  }
}

export default observer(App);
