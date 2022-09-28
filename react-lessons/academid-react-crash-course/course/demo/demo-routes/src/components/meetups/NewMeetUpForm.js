import React,{useRef} from 'react';
import Card from '../ui/Card'

import classes from './NewMeetUpForm.module.css'

const NewMeetUpForm = (props) => {

    // we use useRef to read data from a form
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {

        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetUpData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }
        // console.log(meetUpData);
        props.onAddMeetUp(meetUpData)

    }
    
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea required id="Description" rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.action}>
                    <button>Add MeetUp</button>
                </div>


            </form>
        </Card>
        
    );
};


export default NewMeetUpForm;
