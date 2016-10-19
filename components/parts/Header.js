import React from 'react';

const Header = ({
    status,
    title
}) => {
    return (
        <header className="row">
            <div className="col-xs-10">
                <h1>{title}</h1>
            </div>
            <div className="col-xs-2">
                <span id="connection-status" className={status}></span>
            </div>
        </header>
    );
}

Header.propTypes = {
    status: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

export default Header;