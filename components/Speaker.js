import React from 'react';

import Attendence from './parts/Attendence';
import Display from './parts/Display';
import JoinSpeaker from './parts/JoinSpeaker';
import Questions from './parts/Questions';

const Speaker = ({
    audience,
    emit,
    member,
    questions,
    status
}) => {
    return (
        <div>
            <Display If={status === 'connected'}>
                <Display If={member.name && member.type === 'speaker'}>
                    <Questions questions={questions} emit={emit} />
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