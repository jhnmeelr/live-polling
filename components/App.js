import React from 'react';
import io from 'socket.io-client';

import Header from './parts/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audience: [],
            member: {},
            speaker: '',
            status: 'disconnected',
            title: '',
            questions: [],
            currentQuestion: false
        }
    }

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect.bind(this));
        this.socket.on('disconnect', this.disconnect.bind(this));
        this.socket.on('welcome', this.updateState.bind(this));
        this.socket.on('joined', this.joined.bind(this));
        this.socket.on('audience', this.updateAudience.bind(this));
        this.socket.on('start', this.start.bind(this));
        this.socket.on('end', this.updateState.bind(this));
        this.socket.on('ask', this.ask.bind(this));
    }

    emit(eventName, payload) {
        this.socket.emit(eventName, payload);
    }

    connect() {
        this.setState({
            status: 'connected'
        });
        var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;
        if (member && member.type ==='audience') {
            this.emit('join', member);
        } else if (member && member.type === 'speaker') {
            this.emit('start', { name: member.name, title: sessionStorage.title })
        }
    }

    disconnect() {
        this.setState({
            status: 'disconnected',
            title: 'disconnected',
            speaker: ''
        });
    }

    updateState(serverState) {
        this.setState(serverState);
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

    start(presentation) {
        if (this.state.member.type === 'speaker') {
            sessionStorage.title = presentation.title;
        }
        this.setState(presentation);
    }

    ask(question) {
        sessionStorage.answer = '';
        this.setState({
            currentQuestion: question
        });
    }

    render() {
        return (
            <div>
                <Header {...this.state} />
                {React.cloneElement(this.props.children, {...this.state, emit: this.emit.bind(this)})}
            </div>
        );
    }
}

export default App;