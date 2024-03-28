import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import React from 'react';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import View from './components/View/View';
import DataTrigger from './components/DataTrigger/DataTrigger';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Clock from './components/Clock/Clock';

const App = () => {

  return (
    <HashRouter>
      <Container maxWidth="lg">
        <Clock />
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => (
            localStorage.getItem('profile') ? (
              <Home />
            ) : (
              <Redirect to="/auth" />
            )
          )} />
          <Route path="/auth" exact component={Auth} />
          <Route exact path="/triggers" render={() => (
            localStorage.getItem('profile') ? (
              <DataTrigger />
            ) : (
              <Redirect to="/auth" />
            )
          )} />
          <Route exact path="/view/:symbol" render={() => (
            localStorage.getItem('profile') ? (
              <View />
            ) : (
              <Redirect to="/auth" />
            )
          )} />
          <Route exact path="/about" render={() => (
            <About />
          )} />
          
          <Route exact path="/contact" render={() => (
            localStorage.getItem('profile') ? (
              <Contact />
            ) : (
              <Redirect to="/auth" />
            )
          )} />

          <Route exact path="/ipo" render={() => (
            <ipo />
          )} />
        </Switch>
        <Footer />
      </Container>
    </HashRouter>
  )
};

export default App;