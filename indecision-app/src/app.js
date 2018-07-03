console.log('app.js is running')

const app = {
    title: 'The Title',
    subtitle: 'The Subtitle',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>Title</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

const user = {
    name: 'Adam',
    age: 29,
    location: 'Vancouver'
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
) 

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)