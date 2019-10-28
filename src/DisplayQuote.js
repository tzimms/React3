import React from 'react'

const DisplayQuote = ({APIquote}) => {
    return (
        <div>
            Location : {APIquote.location.street.name}; 
        </div>

    );
};


export default DisplayQuote; 