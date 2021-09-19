import React, { useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Card from './components/Card';
import Data from './data';
import { Link, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Detail from './components/Detail';
import axios from 'axios';
import Loader from './components/Loader';

function App() {
  const [shoes, setShoes] = useState(Data);
  const [loading, setLoading] = useState(null);

  if (loading) return <Loader type="spin" color="red" message={'Loading...'} />;

  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <Card shoes={shoes} />
          <button
            className="btn btn-primary"
            onClick={() => {
              // axios.post('https://codingapple1.github.io/shop/data2.json', { id : 'test', pw : 1234})
              // .then((result)=>{  })
              // .catch(()=>{ })
              axios
                .get('https://codingapple1.github.io/shop/data2.json')
                .then(result => {
                  setLoading(false);
                  console.log(result.data);
                  setShoes([...shoes, ...result.data]);
                  console.log({ shoes });
                })
                .catch(error => {
                  console.log(error);
                  setLoading(true);
                });
            }}
          >
            More
          </button>
        </Route>
        <Route exact path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
