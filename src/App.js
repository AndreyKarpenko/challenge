import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import './App.css';

import Dashboard from './Components/Dashboard';
import NewPost from './Components/NewPost';
import Details from './Components/Details';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={Dashboard} />
                    <Route path={'/new_post'} component={NewPost} />
                    <Route path={'/edit_post'} component={NewPost} />
                    <Route path={'/post_details'} component={Details} />
                </Switch>
            </Router>
        </Provider>
    );
  }
}

export default App;
