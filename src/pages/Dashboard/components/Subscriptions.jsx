import React from 'react'
import styled from 'styled-components'
import { capitalize } from '../../../utils/miscellaneous'
import { Netflix } from '@styled-icons/remix-fill'

const SubscriptionWrap = styled.div`
  background-color: ${ ({ theme }) => theme.colors.white };
  min-height: 142px;
  margin-bottom: 20px;
  border-radius: 16px;
  padding: 20px;

  > * {
    display: inline-block;
  }
`

const SubscriptionTitle = styled.h3`
  font-size: 28px;
  color: ${ ({ theme }) => theme.colors.subscriptionName };
  line-height: 1.1;
  vertical-align: middle;
  margin-left: 5px;
`

const NetflixIcon = styled(Netflix)`
  width: 20px;
  height: auto;
  color: ${ ({ theme }) => theme.logosColor.netflix };
`

const Subscriptions = props => {
  const { subscriptions } = props

  return subscriptions.map(item => (
    <SubscriptionWrap key={ item._id } >
      <NetflixIcon />
      <SubscriptionTitle>{ capitalize(item.name) }</SubscriptionTitle>
    </SubscriptionWrap>
  ))
}

export default Subscriptions
