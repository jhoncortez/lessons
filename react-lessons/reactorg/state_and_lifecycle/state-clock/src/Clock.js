import {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';


const Clock = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString())
    
    const update_date = () =>{
        setDate(new Date().toLocaleTimeString())
    }

    useEffect(() => {
        setInterval(update_date, 1000)
    }, [date])
    return (
        <div>
            {date} 
            <button onClick={update_date}>update date</button>
        </div>
    );
};


// Clock.propTypes = {

// };


export default Clock;
