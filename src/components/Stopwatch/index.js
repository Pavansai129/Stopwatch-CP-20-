import {Component} from 'react'
import './index.css'

// Write your code here
class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0, timeInMinutes: 0}

  increaseTimer = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.intervalId = setInterval(this.countUp, 1000)
    }
  }

  stopTimer = () => {
    clearTimeout(this.intervalId)
  }

  countUp = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  resetTimer = () => {
    clearTimeout(this.intervalId)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  getTimer = () => {
    const {timeElapsedInSeconds, timeInMinutes} = this.state
    const timeInSeconds = timeInMinutes * 60 + timeElapsedInSeconds
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return (
      <h1>
        {stringifiedMinutes}:{stringifiedSeconds}
      </h1>
    )
  }

  render() {
    return (
      <div className="stop-watch-bg-container">
        <div>
          <h1>Stopwatch</h1>
          <div>
            <div className="timer-text-and-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            {this.getTimer()}
            <div className="buttons-container">
              <button
                className="button"
                onClick={this.increaseTimer}
                type="button"
              >
                Start
              </button>
              <button className="button" onClick={this.stopTimer} type="button">
                Stop
              </button>
              <button
                className="button"
                onClick={this.resetTimer}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
