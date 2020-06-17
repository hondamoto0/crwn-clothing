import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import ShopPage from './pages/shop/shop';
import HomePage from './pages/homepage/homepage';
function App() {
  return (
    <div>
      <Route path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
