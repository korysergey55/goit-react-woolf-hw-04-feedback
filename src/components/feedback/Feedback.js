import { useEffect, useState } from 'react'
import styles from './styles.module.css'

import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions'
import Statistic from 'components/statistic/Statistic'
import Section from 'components/section/Section'
import Notification from 'components/notification/Notification'
import Button from 'components/button/Button'

const INITIAL_STATE = { good: 0, neutral: 0, bad: 0 }

const FeedBack = () => {
  const [state, setState] = useState(INITIAL_STATE)
  const [options] = useState(Object.keys(state))
  const [totalFeedback, setTotalFeedback] = useState(0)

  useEffect(() => {
    setTotalFeedback(() => countTotalFeedback())
  }, [state])

  const onLeaveFeedback = (feedback) => {
    setState((prev) => ({ ...prev, [feedback]: prev[feedback] + 1 }))
  }

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, item) => {
      return acc + item
    }, 0)
  }

  const positivePercentage = () => {
    return Math.round((state.good / totalFeedback) * 100)
  }

  return (
    <section className={styles.container} >

      <Section title={'Please leave feedback'}>
        {options.length > 0 &&
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback} />
        }
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

      {totalFeedback ?
        <Button reset={setState} INITIAL_STATE={INITIAL_STATE} />
        : null
      }

    </section>
  );
}

export default FeedBack;