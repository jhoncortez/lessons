import React, {useContext} from 'react';

import FavoritesContext from '../store/favorites-context';

import MeetUpList from '../components/meetups/MeetUpList';

const FavoritesPage = () => {

  const favoriteCTX = useContext(FavoritesContext)

  let content = favoriteCTX.totalFavorites === 0 ? <p> There is no favorites yet </p>: <MeetUpList meetups={favoriteCTX.favorites} />
  
  return (
    <section>
      <h1>My favorites</h1>
      {content}
      </section>
  )
}

export default FavoritesPage