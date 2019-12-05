import React from 'react';

import About from './pages/About/About'
import Authors from './pages/Authors/Authors'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './pages/Homepage/Main'
import SinglePost from './pages/Post/SinglePost'
import SingleAuthor from './pages/Author/SingleAuthor';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path='/authors' component={Authors} />
          <Route exact path='/author/:id' component={SingleAuthor} />
          <Route exact path='/post/:id' component={SinglePost} />
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
// `/author/${author.id}`