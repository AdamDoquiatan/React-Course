'use strict';

console.log('Running');

var app = {
    title: 'The Other Title!',
    subtitle: 'The Subtitle!',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var user = {
    name: 'Adam',
    age: '29',
    location: 'Vancouver'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
