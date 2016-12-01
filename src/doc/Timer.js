/**
 * Created by wangbo on 2016/12/1.
 */
import React from 'react';
import './Timer.css'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      resetTimes: 0,
      text: ''
    };

    this.reset = this.reset.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  tick() {
    this.setState((preState)=> ({
      seconds: preState.seconds + 1
    }));
  }

  reset() {
    this.setState((preState) => ({seconds: 0, resetTimes: preState.resetTimes + 1}))
  }

  componentDidMount() {
    // this.interval = setInterval(() => this.tick(), 1000);
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(" submit something ");
    if (!isNaN(parseInt(this.state.text, 10))) {
      this.setState({
        seconds: parseInt(this.state.text, 10),
        text: ''
      });
    }
  }

  handleTextChange(e) {
    this.setState({text: e.target.value})
    console.log(' e.target is ' + e.target) //HTMLInputElement
    e.target.focus()
  }

  render() {
    let even = <p>Even</p>
    if (this.state.seconds % 2 !== 0) {
      even = <p>Odd</p>
    }
    return (
      <div className="Timer">
        <p onClick={this.reset}>Seconds : {this.state.seconds}</p>
        {even}
        <button className="btn" type="button" onClick={this.reset}>Reset Timer</button>
        <p>Reset Times: {this.state.resetTimes}</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a Number:
            <input type="text" ref={it => this._text = it} value={this.state.text} onChange={this.handleTextChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Timer;