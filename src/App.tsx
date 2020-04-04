import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Menu from './components/Menu';
import NowPlaying from './components/NowPlaying';
import MyGames from './components/MyGames';
import Games from './components/Games';
import Game from './components/Game';
import Search from './components/Search';

import bg from './images/bg.jpg';

const useStyles = makeStyles({
  app: {
    backgroundColor: '#C6E8EE',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'repeat-x',
    minHeight: '100vh',
    padding: '0 2rem',
  },
});

// TODO: create my games store!

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <Grid container direction="column" className={classes.app}>
        <Switch>
          <Route path="/now-playing">
            <Header title="Now Playing" />
            <NowPlaying />
          </Route>
          <Route path="/my-games">
            <Header title="My Games" />
            <MyGames />
          </Route>
          <Route path="/search">
            <Header title="Search" />
            <Search />
          </Route>
          <Route path="/games/:search">
            <Header title="Results" />
            <Games />
          </Route>
          <Route path="/game/:name">
            <Game />
          </Route>
          <Route path="/">
            <Header title="Menu" />
            <Menu />
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
};

export default App;
