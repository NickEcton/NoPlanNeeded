import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Root from './components/Root.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Provider store={this.props.store}>
            <HashRouter>
              <Root />
            </HashRouter>
          </Provider>
      </div>
    );
  }
}

export default App;
