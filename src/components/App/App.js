import React from 'react';
import '../../assets/css/App.css';
import Routes from '../../routes/Routes.js';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
