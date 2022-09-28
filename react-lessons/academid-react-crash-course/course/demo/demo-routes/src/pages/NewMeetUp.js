import React from 'react';
import NewMeetUpForm from '../components/meetups/NewMeetUpForm';
import {useNavigate} from 'react-router-dom'

const NewMeetUp = () => {

    const history = useNavigate();

    const onAddMeetUpCallBack = (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            mode:'cors'
        };
        console.log(data)
        fetch('https://academind-react-project-bd-default-rtdb.firebaseio.com/meetups.json', requestOptions)
        .then(() => {history('/')})
        // .then(response => response.json())
    }

    return (
        <section>
            <h1>Add New Meet up</h1>
            <NewMeetUpForm onAddMeetUp={onAddMeetUpCallBack} />
        </section>
    );
}

export default NewMeetUp;
