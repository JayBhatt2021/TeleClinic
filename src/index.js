import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware, compose} from 'redux';
import allReducers from './redux/reducers';
import thunk from 'redux-thunk';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {blue, lightBlue} from "@material-ui/core/colors";
import Root from './Root';

const myStore = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk),
        //todo: comment below line out when not using Redux DevTools
        // (commenting the below line out allows app to work on other browsers besides Chrome)
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[500]
        },
        secondary: {
            main: blue[500]
        }
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Root store={myStore}/>
    </MuiThemeProvider>
    , document.getElementById('root')
);
