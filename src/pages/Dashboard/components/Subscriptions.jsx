import React from 'react'
import styled from 'styled-components'
import { capitalize } from '../../../utils/miscellaneous'

const SubscriptionWrap = styled.div`
  background-color: ${ ({ theme }) => theme.colors.white };
  min-height: 142px;
  margin-bottom: 20px;
  border-radius: 16px;
  padding: 20px;
`

const SubscriptionTitle = styled.h3`
  font-size: 28px;
  color: ${ ({ theme }) => theme.colors.subscriptionName };
  line-height: 1.1;
`

const Subscriptions = props => {
  const { subscriptions } = props

  return subscriptions.map(item => (
    <SubscriptionWrap key={ item._id } >
      <SubscriptionTitle>{ capitalize(item.name) }</SubscriptionTitle>
    </SubscriptionWrap>
  ))
}

export default Subscriptions
