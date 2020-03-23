'use strict';

console.log('app.js is running!');

var template = React.createElement(
    'p',
    null,
    'this is a jsx from app.js!!'
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Neil'
    ),
    React.createElement(
        'p',
        null,
        'Age: 30'
    ),
    React.createElement(
        'p',
        null,
        'Location: Macao'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
