import React, { useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Card from './components/Card';
import Data from './data';
import { Link, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Detail from './components/Detail';

function App() {
  let [shoes, setShoes] = useState(Data);
  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling extra
              attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <Card shoes={shoes} />
        </Route>
        <Route exact path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
