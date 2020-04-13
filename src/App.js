import React from 'react';
import Layout from "./components/Layout/Layout";
import ContentBuilder from "./containers/ContentBuilder/ContentBuilder";
import './App.css';

function App() {
  return (
      <Layout>
          <ContentBuilder />
      </Layout>
  );
}

export default App;
