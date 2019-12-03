import React from 'react';
import About from './view/comopnents/About.js'
import Authors from './view/comopnents/Authors.js'
import './App.css';
import Header from './view/comopnents/Header.js'
import Footer from './view/comopnents/Footer.js'
import Main from './view/comopnents/Main.js'
import SinglePost from './view/comopnents/SinglePost'
import SingleAuthor from './view/comopnents/SingleAuthor.js';
import AuthorsListItem from './view/comopnents/AuthorsListItem.js'
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

          <Route exact path='/Authors' component={Authors} />
          <Route exact path='/SingleAuthor' component={SingleAuthor} />
          <Route exact path='/SinglePost' component={SinglePost} />
          <Route exact path='/' component={Main} />
          <Route exact path='/About' component={About} />
          <Route exact path='/AuthorsListItem' component={AuthorsListItem} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
