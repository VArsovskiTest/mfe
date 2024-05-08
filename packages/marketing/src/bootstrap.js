import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount fn to start the app
const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    );
}

// If we are in development and isolation
if (process.env.NODE_ENV == 'development') {
    const devRoot = document.querySelector("#_marketing-dev-root");

    if (devRoot) {
        mount(devRoot);
    }
}

// If we are running through container, should export the mount fn
export { mount }
