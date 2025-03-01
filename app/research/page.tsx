import React from 'react';

const WelcomeMessage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', marginTop: '50px' }}>
            <h1 style={{ fontSize: '2em', margin: '20px 0' }}>Coming Soon!</h1>
            <p style={{ fontSize: '1.2em', color: '#555' }}>Our research page is currently in progress. Stay tuned!</p>
        </div>
    );
};

export default WelcomeMessage;