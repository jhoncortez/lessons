import React from 'react';
import MeetUpItem from './MeetUpItem';

import classes from "./MeetUpList.module.css"

const MeetUpList = ({meetups}) => {
    return (
        <ul className={classes.list}>
            {meetups.map(meetup => <MeetUpItem key={meetup.id} data={meetup} />)}
        </ul>
    );
};



export default MeetUpList;
