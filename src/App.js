import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import Header from './components/Header/index';
import history from './history';
import store from './store/index';
import css from './App.css';
import Home from './components/Home/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <main className={css.container}>
            <div>
              <Header/>
              <Route exact path='/' component={Home}/>
              <Route path='/calendar'/>
            </div>
          </main>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
