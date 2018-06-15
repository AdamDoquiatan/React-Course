console.log('Running')

var templateObject= {
    title : 'The Title!',
    subtitle : 'The Subtitle!'
}

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{templateObject.title}</h1>
        <p>{templateObject.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
)

var user = {
    name : 'Adam',
    age : '29',
    location : 'Vancouver'
}

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>    
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);