import React from 'react';

class Attendence extends React.Component {
    constructor(props) {
        super(props);
    }

    addMemberRow(member, i) {
        return (
            <tr key={i}>
                <td>{member.name}</td>
                <td>{member.id}</td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <h2>Attendence - {this.props.audience.length} members</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Audience Member</th>
                            <th>Socket ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.audience.map(this.addMemberRow.bind(this))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Attendence;