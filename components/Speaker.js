import React from 'react';

const Speaker = ({
    status
}) => {
    return (
        <h1>Speaker : {status}</h1>
    );
};

Speaker.propTypes = {
    status: React.PropTypes.string
};

export default Speaker;