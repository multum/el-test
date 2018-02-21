import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import history from './history';
import store from './store/index';

import css from './App.css';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

import Readme from './components/Readme/index';
import Calendar from './components/Calendar/index'
import Contacts from './components/Contacts/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header/>
            <main className={css.wrapper}>
              <Route exact path='/' component={Readme}/>
              <Route path='/calendar' component={Calendar}/>
              <Route path='/contacts' component={Contacts}/>
              <Footer/>
            </main>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
