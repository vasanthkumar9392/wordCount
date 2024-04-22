import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {noOfletters: 0}

  countLetters = event => {
    const wordCount = event.target.value.length
    this.setState({noOfletters: wordCount})
  }

  render() {
    const {noOfletters} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="image-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
          <div className="context-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="label" className="paragraph">
              Enter the phrase
            </label>
            <input
              className="user-input"
              type="text"
              placeholder="Enter the phrase"
              id="label"
              onChange={this.countLetters}
            />
            <div className="count-container">
              <p className="letters-heading">{`No.of letters: ${noOfletters}`}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
