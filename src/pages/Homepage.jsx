import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Home from '../components/Home';
import PopularMyTineraries from '../components/PopularMyTineraries';

function Homepage() {
  return (
    <MainLayout>
      <Home />
      <PopularMyTineraries />
    </MainLayout>
  );
}

export default Homepage;
