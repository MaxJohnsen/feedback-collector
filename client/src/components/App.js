import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Landing = () => {
  return <h2>Landing</h2>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
