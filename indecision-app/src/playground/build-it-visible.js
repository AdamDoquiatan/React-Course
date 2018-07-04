
let visibility = false

const toggleVisibility = () => {
  visibility = !visibility
  render()
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Show Details' : 'Hide Details'}
      </button>
      {visibility && (
        <div>
          <p>Here I am!</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(jsx, document.querySelector('#app'))
}

render()