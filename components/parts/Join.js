import React from 'react';

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
            </form>
        );
    }
}

export default Join;