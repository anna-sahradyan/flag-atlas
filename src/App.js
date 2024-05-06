import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import CountriesDetailList from './components/countries/CountriesDetailList';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path={'/'}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path={'/country/:name'}
          element={
            <Layout>
              <CountriesDetailList />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
