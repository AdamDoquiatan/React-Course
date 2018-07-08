class VisibilityToggle extends React.Component {
  constructor() {
    super()
    this.handleToggleVisibility.bind(this)
    this.state = {
      visible : true
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visible : !prevState.visible
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visible ? 'Hide text' : 'Show text'}</button>
        <p>
          {this.state.visible ? 'Oh hello!' : ''}
        </p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector('#app'))



// let visibility = false

// const toggleVisibility = () => {
//   visibility = !visibility
//   render()
// }

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Show Details' : 'Hide Details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Here I am!</p>
//         </div>
//       )}
//     </div>
//   )
//   ReactDOM.render(jsx, document.querySelector('#app'))
// }

// render()