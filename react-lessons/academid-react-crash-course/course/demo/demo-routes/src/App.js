import React from 'react';
import { Routes, Route } from 'react-router-dom'

// import MainNavigation from './components/Layout/MainNavigation'
import Layout from './components/Layout/Layout'

import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetUp'


function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="new-meetup" element={<NewMeetupPage />} />
      </Routes>

    </Layout>
  );
}

export default App;
