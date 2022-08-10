import React from 'react';
// import PropTypes from 'prop-types';


const Clock = () => {
    return (
        <div>
            {new Date().toLocaleTimeString()}
        </div>
    );
};


// Clock.propTypes = {

// };


export default Clock;
