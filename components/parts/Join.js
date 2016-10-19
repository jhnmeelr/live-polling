import React from 'react';
import { Link } from 'react-router';

class Join extends React.Component {
    constructor(props) {
        super(props);
    }
    join() {
        const memberName = this.refs.name.value;
        this.props.emit('join', { name: memberName });
    }
    render() {
        return (
            <form action="javascript:void(0)" onSubmit={() => this.join()}>
                <label>Full Name</label>
                <input ref="name" className="form-control" placeholder="enter your full name..." required />
                <button className="btn btn-primary">Join</button>
                <Link to="/speaker">Join as speaker</Link>
            </form>
        );
    }
}

export default Join;