import { React, useCallback, useState } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import { Route } from 'react-router-dom';

function App() {
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
