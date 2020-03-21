import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { WelcomeDialog } from './Composition/WelcomeDialog';

// ReactDOM.render(<Reservation />, document.getElementById('root'));

ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));

// setTimeout(() => {
//   ReactDOM.render(<input value={null} />, document.getElementById('root'));
// }, 3000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
