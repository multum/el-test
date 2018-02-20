import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import history from './history';
import store from './store/index';
import css from './App.css';
import Home from './components/Home/index';
import Calendar from './components/Calendar/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header/>
            <main className={css.wrapper}>
              <Route exact path='/' component={Home}/>
              <Route path='/calendar' component={Calendar}/>
              <Footer/>
            </main>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
