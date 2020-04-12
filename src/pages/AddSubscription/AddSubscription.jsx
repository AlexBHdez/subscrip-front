import React from 'react'
import styled from 'styled-components'
// import useForm from '../../utils/customHooks'
// import { Amazon, Adobe, Airbnb, Apple } from 'styled-icons/boxicons-logos'

// const LOGOS = [ Amazon, Adobe, Airbnb, Apple ]

const Introduction = styled.div`
  min-height: 260px;
  background-color: #1ce1ac;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  border-radius: 12px 12px 40px 40px;
  padding: 100px 20px 20px;
  color: ${ ({ theme }) => theme.colors.white };

  > div:first-child {
    font-size: 48px;
    line-height: 1.5;
    font-weight: 500;
  }

  > div:last-child {
    font-size: 28px;
    line-height: 1.3;
    font-weight: 300;
  }
`

const AddSubscription = () => {

  return (
    <Introduction>
      <div>Add a subscrip</div>
      <div>First of all, select an icon for your subscrip.</div>
    </Introduction>
  )
}

export default AddSubscription
