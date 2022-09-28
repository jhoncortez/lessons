import React, {useContext} from 'react';
import Card from '../ui/Card';
import classes from "./MeetUpItem.module.css"

import FavoritesContext from '../../store/favorites-context';

const MeetUpItem = (props) => {

    const favoritesCtx = useContext(FavoritesContext)

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.data.id)

    const toogleFavoritesStatusHandler = () =>{
        if(itemIsFavorite) {
            favoritesCtx.removeFavorite(props.data.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.data.id,
                title: props.data.title,
                description: props.data.name,
                image: props.data.image,
                address: props.data.address
            })
        }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.data.image} alt={props.data.title} /></div>
                <div className={classes.content}>
                    <h3>{props.data.title}</h3>
                    <address>{props.data.address}</address>
                    <p>{props.data.description}</p>
                </div>

                <div className={classes.actions}>
                    <button onClick={toogleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove from Favorites': 'Add To Favorites'}</button>
                </div>
            </Card>
            
        </li>
    );
};



export default MeetUpItem;
