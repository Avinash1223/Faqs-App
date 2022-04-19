import {Component} from 'react'
import './index.css'

const MinusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const PlusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderImg = () => {
    const {isActive} = this.state
    const image = isActive ? MinusImg : PlusImg
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onToggleIsActive}>
        <img src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="faq-item">
        <div className="faq-questions-container">
          <h1 className="faq-questions">{questionText}</h1>
          {this.renderImg()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
