import { Routes, Route, Link } from 'react-router-dom'

import MainNavigation from './components/Layout/MainNavigation'

import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'


function App() {
  return (
    <div>
      
      <MainNavigation />
      
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="new-meetup" element={<NewMeetupPage />} />
      </Routes>

    </div>
  );
}

export default App;
