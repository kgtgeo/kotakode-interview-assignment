import React from 'react';
import App from './App';
import {ThemeProvider} from './contexts/Theme';

const ThemeContainer = (props) => {
    const uis = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    }

    return (
    <div>
        <ThemeProvider value={uis}>
            <App />
        </ThemeProvider>
    </div>
    )
}

export default ThemeContainer;