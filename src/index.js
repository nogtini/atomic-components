import React from 'react';
import { render } from 'react-dom';
import AppComponent from './components/App';

const app = React.createFactory(AppComponent);
const mountNode = document.getElementById('app-mount');
const serverState = window.state;

render(app(serverState), mountNode);
