import React from 'react';
import io from 'socket.io-client';

import Header from './parts/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audience: [],
            member: {},
            status: 'disconnected',
            title: ''
        }
    }

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect.bind(this));
        this.socket.on('disconnect', this.disconnect.bind(this));
        this.socket.on('welcome', this.welcome.bind(this));
        this.socket.on('joined', this.joined.bind(this));
        this.socket.on('audience', this.updateAudience.bind(this));
    }

    emit(eventName, payload) {
        this.socket.emit(eventName, payload);
    }

    connect() {
        var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;
        if (member) {
            this.emit('join', member);
        }
        this.setState({
            status: 'connected'
        });
    }

    disconnect() {
        this.setState({
            status: 'disconnected'
        });
    }

    welcome(serverState) {
        this.setState({
            title: serverState.title
        });
    }

    joined(member) {
        sessionStorage.member = JSON.stringify(member);
        this.setState({
            member
        });
    }

    updateAudience(newAudience) {
        this.setState({
            audience: newAudience
        });
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} status={this.state.status} />
                {React.cloneElement(this.props.children, {...this.state, emit: this.emit.bind(this)})}
            </div>
        );
    }
}

export default App;