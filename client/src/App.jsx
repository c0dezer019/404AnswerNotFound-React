import React, { useState } from 'react';
import Routes from './config/routes';
import Header from './components/Header';
import './styles/sass/global.css';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [user] = useState({});

  return (
    <div className="app">
      <Header user={ user } />
      <Routes />
    </div>
  );
};

export default App;
