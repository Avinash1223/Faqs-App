import FaqItem from '../FaqItem'
import './index.css'

const Faq = props => {
  const {faqsList} = props

  return (
    <div className="faq-bg-container">
      <div className="faq-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-list">
          {faqsList.map(eachFaq => (
            <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faq
