// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="number-generate-btn"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="output-para">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
