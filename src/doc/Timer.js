/**
 * Created by wangbo on 2016/12/1.
 */
import React from 'react';
import './Timer.css'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {seconds: 0};

    this.reset = this.reset.bind(this)
  }

  tick() {
    this.setState((preState)=> ({
      seconds: preState.seconds + 1
    }));
  }

  reset() {
    this.setState((preState) => ({seconds: 0}))
  }

  componentDidMount() {
    // this.interval = setInterval(() => this.tick(), 1000);
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="Timer">
        <p onClick={this.reset}>Seconds : {this.state.seconds}</p>
      </div>
    )
  }
}

export default Timer;