/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import Footer from './Footer';
import Info from './info';


function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageContent />
      <MyComponent />
      <Info />
      <Footer owner="Ryan Smith" />
    </div>
  );
}

export default App;
