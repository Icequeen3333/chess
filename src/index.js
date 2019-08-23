import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import darkTheme from './themes/dark';

import GameView from './components/GameView';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
        <div>
            <GlobalStyle />
            <HashRouter>
                <Switch>
                    <Route path="/" component={GameView} />
                </Switch>
            </HashRouter>
        </div>
    </ThemeProvider>,
    document.getElementById('app')
);
