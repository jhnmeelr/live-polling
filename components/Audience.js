import React from 'react';

import Ask from './parts/Ask';
import Display from './parts/Display';
import Join from './parts/Join';

const Audience = ({
    audience,
    emit,
    member,
    status,
    currentQuestion
}) => {
    return (
        <div>
            <Display If={status === 'connected'}>

                <Display If={member.name}>
                    <Display If={!currentQuestion}>
                        <h2>Welcome {member.name}</h2>
                        <p>{audience.length} audience members connected</p>
                        <p>Questions will appear here.</p>
                    </Display>
                    <Display If={currentQuestion}>
                        <Ask question={currentQuestion} emit={emit}/>
                    </Display>
                </Display>

                <Display If={!member.name}>
                    <h1>Join the session</h1>
                    <Join emit={emit}/>
                </Display>

            </Display>
        </div>
    );
}

export default Audience;