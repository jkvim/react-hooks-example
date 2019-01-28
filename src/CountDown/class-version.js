import React from 'react'

class CountDown extends React.Component {
  state = {
    count: 10
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(({ count }) => ({
        count: count - 1
      }))
    }, );
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <p>{this.state.count}</p>
    )
  }
}

export default CountDown