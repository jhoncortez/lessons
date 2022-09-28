import React, { useState, createContext } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup)=>{},
    removeFavorite: (meetupId)=>{},
    itemIsFavorite: (meetupId)=>{},
})

export const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([])

    const addFavoriteHandler =(favoriteMeetup) => {
        // setUserFavorites(userFavorites.concat(favoriteMeetup))

        setUserFavorites((prevFavorites) => {
            return prevFavorites.concat(favoriteMeetup)
        })

        // alternative: create a variable to save the current userFavorites and then set the state cocatening the new data to the variable
        // const prevFavorites = userFavorites
        // setUserFavorites(prevFavorites.concat(favoriteMeetup))

    }

    const removeFavoriteHandler =(meetupId) => {
        setUserFavorites((prevFavorites) => {
            return prevFavorites.filter( meetup => meetup.id !== meetupId )
        })
        
    }

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some(meetup => meetup.id === meetupId)

    }
    // console.log(userFavorites)
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,

    }
    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )

}

export default FavoritesContext;