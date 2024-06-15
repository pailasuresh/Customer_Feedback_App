// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {check: false}

  change = () => {
    const {check} = this.state
    if (check === true) {
      this.setState({check: false})
    } else {
      this.setState({check: true})
    }
  }

  //emojis

  renderEmojis = () => {
    const {resources} = this.props

    const {emojis} = resources

    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="ulEmojis">
          {emojis.map(forEachEmoji => (
            <li key={forEachEmoji.id} className="li" onClick={this.change}>
              <div className="emojis-container">
                <img src={forEachEmoji.imageUrl} className="img" alt={forEachEmoji.name} />
                <p className="emoji-title">{forEachEmoji.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  //Feedback Thank you

  renderFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} className="love" alt="love emoji" />
        <h1 className="Thank-you">Thank you!</h1>
        <p className="feedback-summary">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {check} = this.state
    return (
      <div className="main">
        <div className="sub-main">
          {check ? this.renderFeedback() : this.renderEmojis()}
        </div>
      </div>
    )
  }
}

export default Feedback
