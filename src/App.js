import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Stopwatch from './components/Stopwatch';

function App(props) {
  return (
    <div>
      <Header />
      <Stopwatch />
      <Footer />
    </div>
  );
}

export default App;