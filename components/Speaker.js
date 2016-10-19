import React from 'react';

import Attendence from './parts/Attendence';
import Display from './parts/Display';
import JoinSpeaker from './parts/JoinSpeaker';

const Speaker = ({
    audience,
    emit,
    member,
    status
}) => {
    return (
        <div>
            <Display If={status === 'connected'}>
                <Display If={member.name && member.type === 'speaker'}>
                    <p>Questions</p>
                    <Attendence audience={audience} />
                </Display>
                <Display If={!member.name}>
                    <h2>Start the presentation</h2>
                    <JoinSpeaker emit={emit} />
                </Display>
            </Display>
        </div>
    );
};

Speaker.propTypes = {
    status: React.PropTypes.string
};

export default Speaker;