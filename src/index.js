import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NameForm from './Forms/NameForm';

const numbers = [1, 2, 3, 4, 5, 6];
function NumberList(props) {
    return (
        <ul>{props.numbers.map((number) =>
            <li key={number.toString()}>{number * 2}</li>)}
        </ul>
    );
}


const posts = [
    { id: 1, title: 'Hello 1', content: 'Content 1' },
    { id: 2, title: 'Hello 2', content: 'Content 2' },

]
ReactDOM.render(<NameForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


