import React from 'react';
import './Reset.css';
import './App.css';

import AccountSetup from './components/AccountSetup/AccountSetup';
import AccountPreview from './components/AccountPreview/AccountPreview';

function App(props) {
    return (
        <div className="app-container">
            <div className="app">
                <AccountSetup />
                <AccountPreview />
            </div>
        </div>
    );
}

export default App;
