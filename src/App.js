import React from 'react';
import Layout from "./components/Layout/Layout";
import ContentBuilder from "./containers/ContentBuilder/ContentBuilder";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Layout>
              <ContentBuilder />
          </Layout>
      </BrowserRouter>
  );
}

export default App;
