import { useState } from 'react'
import styles from './styles.module.css'

import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions'
import Statistic from 'components/statistic/Statistic'
import Section from 'components/section/Section'
import Notification from 'components/notification/Notification'
import Button from 'components/button/Button'

const FeedBack = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 })
  console.log(Object.values(state).length)

  const onLeaveFeedback = (feedback) => {
    setState((prev) => ({ ...prev, [feedback]: prev[feedback] + 1 }))
  }

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, item) => {
      return acc + item
    }, 0)
  }

  const countPositivePercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100)
  }

  const resetFeedback = () => {
    setState({ good: 0, neutral: 0, bad: 0 })
  }

  const positivePercentage = countPositivePercentage()
  const totalFeedback = countTotalFeedback()

  return (
    <section className={styles.container} >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title={'Statistics'}>
        {totalFeedback ?
          <Statistic
            state={state}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage} />
          :
          <Notification message={'There is no feedback!'} />
        }
      </Section>

      {countTotalFeedback() ? <Button reset={resetFeedback} /> : null}
    </section>
  );
}

export default FeedBack;