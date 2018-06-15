console.log('Running')

var app = {
    title : 'The Other Title!',
    subtitle : 'The Subtitle!',
    options : ['One', 'Two']
}

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
)

var user = {
    name: 'Adam',
    age : '29',
    location : 'Vancouver'
}

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>
    }
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);