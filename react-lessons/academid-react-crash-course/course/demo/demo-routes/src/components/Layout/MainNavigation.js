import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import FavoritesContext from '../../store/favorites-context';

import classes from "./MainNavigation.module.css"


const MainNavigation = () => {

  const favoriteCTX = useContext(FavoritesContext)

  return (
    <header className={classes.header}>
        <h1 className={classes.logo}>Routes</h1>
        <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/new-meetup">New MeetUp</Link> |{" "}
        <Link to="/favorites">Favorites <span className={classes.badge}>{favoriteCTX.totalFavorites}</span></Link>
      </nav>
    </header>
  )
}

export default MainNavigation