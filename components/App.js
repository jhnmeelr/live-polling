import React from 'react';
import io from 'socket.io-client';

import Header from './parts/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'disconnected',
            title: ''
        }
    }

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect.bind(this));
        this.socket.on('disconnect', this.disconnect.bind(this));
        this.socket.on('welcome', this.welcome.bind(this));
    }

    connect() {
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

    render() {
        return (
            <div>
                <Header title={this.state.title} status={this.state.status} />
                {React.cloneElement(this.props.children, {...this.state})}
            </div>
        );
    }
}

export default App;