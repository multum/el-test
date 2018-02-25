import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import history from './history';
import store from './store/index';

import css from './App.css';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

import ReadmeContainer from './containers/ReadmeContainer';
import CalendarContainer from './containers/CalendarContainer'
import ContactsContainer from './containers/ContactsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <Header/>
            <main className={css.wrapper}>
              <Route exact path='/' component={ReadmeContainer}/>
              <Route path='/calendar' component={CalendarContainer}/>
              <Route path='/contacts' component={ContactsContainer}/>
              <Footer/>
            </main>
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
