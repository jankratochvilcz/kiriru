import React from 'react';
import './App.scss';
import AppHeader from './components/organisms/AppHeader';
import Footer from './components/organisms/Footer';
import Levels from './components/organisms/Levels';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="page-container">
        <Levels />
      </div>
      <Footer />
    </div>
  );
}

export default App;
