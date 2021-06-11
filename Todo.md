 ] IN APP
        [ x ] Import {Route, HashRouter as Router} from 'react-router-dom'
        [  ] Wrap the app in a <Router>
        [ ] Admin or Client?
            [ ] Client
                [ ] Make Routes through the different pages
            [ ] Admin
                [ ] Make Routes through the different pages
    [ x] IN INDEX.JS 
        [  ] import {createStore, combineReducers, applyMiddleware} from 'redux';
        [ x ] import {Provider} from 'react-redux';
        [x  ] import logger from 'redux-logger';
        [ x ] Create Store
            [ x ] Wrap with combineReducers
                [ ] Pass in reducers
            [  ] applyMiddleware
                [ x ] logger
        [  ] React.DOM.render
            [  ] React.StrictMode?
            [  ] Wrap the app in a <Provider> and give the provider a store -> <Provider store={store}>
            [ ] Service Worker?