import React from 'react';
import './Reset.css';
import './App.css';

import Asside from './components/Asside/Asside';
import MainContent from './components/MainContent/MainContent';

function App(props) {
    return (
        <div className="app-container">
            <div className="app">
                <Asside />
                <MainContent />
            </div>
        </div>
    );
}

export default App;
