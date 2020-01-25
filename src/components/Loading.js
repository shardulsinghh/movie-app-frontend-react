import React from 'react';

//This is the Loading BAr COmponent

const Loading = () => {
    return (
        <div className="loading-container">
            <progress className="progress is-small is-primary" max="100">15%</progress>
        </div>
    );
};

export default Loading;