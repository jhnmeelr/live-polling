import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div id="not-found">
            <h1>Sorry...</h1>
            <p>
                We cannot find the page that you have requested.
                Were you looking for one of these: 
            </p>
            <Link to='/'>Join as Audience</Link>
            <Link to='/speaker'>Start the presentation</Link>
            <Link to='/board'>View the board</Link>
        </div>
    );
}

export default NotFoundPage;