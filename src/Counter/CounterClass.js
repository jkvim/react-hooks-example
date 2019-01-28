import React from 'react'

class CounterClass extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  render() {
    console.log('this.state.count', this.state.count)
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default CounterClass