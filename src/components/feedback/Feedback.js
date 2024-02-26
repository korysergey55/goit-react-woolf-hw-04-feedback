import { Component } from 'react'
import styles from './styles.module.css'

import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions'
import Statistic from 'components/statistic/Statistic'
import Section from 'components/section/Section'
import Notification from 'components/notification/Notification'

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  onLeaveFeedback = (option) => {
    this.setState((prev) => ({ [option]: prev[option] + 1 }))
  }
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => {
      return acc + item
    }, 0)
  }
  positivePercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {
    const isRenderFeedbackOptions = Object.keys(this.state)
    const totalFeedback = this.countTotalFeedback()

    return (
      <section className={styles.container} >

        <Section title={'Please leave feedback'}>
          {isRenderFeedbackOptions.length > 0 &&
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback} />
          }
        </Section>

        <Section title={'Statistics'}>
          {totalFeedback ?
            <Statistic
              state={this.state}
              totalFeedback={totalFeedback}
              positivePercentage={this.positivePercentage} />
            :
            <Notification message={'There is no feedback'} />
          }

        </Section>
      </section>
    );
  }

}

export default FeedBack;