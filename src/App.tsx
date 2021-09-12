import React from 'react';
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import './App.scss';
import AppHeader from './components/organisms/AppHeader';
import Footer from './components/organisms/Footer';
import Levels from './components/pages/Levels';
import Practice from './components/pages/Practice';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <div className="page-container">
          <Switch>
          <Route path="/practice/:letters" exact={false} render={(props: any) => {
            return (
                            <Practice
                                letters={JSON.parse(props.match.params.letters)}
                            />
                        )}}>
          </Route>
          <Route path="/">
            <Levels />
          </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
