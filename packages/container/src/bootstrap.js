import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

function mount(el) {
    ReactDOM.render(<App/>, el);
}

if (process.env.NODE_ENV == 'development') {
    var el = document.querySelector("#_container-root-placeholder");
    if (el) mount(el);
}

export { mount }
