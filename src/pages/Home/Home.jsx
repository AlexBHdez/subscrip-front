import React from 'react'
import styled from 'styled-components'
import { FiveHundredPx } from '@styled-icons/boxicons-logos'
import { ReactComponent as SavingsImage } from '../../images/svg/undraw_savings.svg'
import { Button } from '../../ui'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  > * {
    margin-bottom: 3rem;
  }
`

const ImageWrapper = styled.div`
  max-width: 100%;
  text-align: center;
  > * {
    width: 100%;
  }
`

const Home = () => {
  return (
    <Wrapper>
      <div>
        <FiveHundredPx size='50' />
        <h1>Subscrip</h1>
      </div>
      <ImageWrapper>
        <SavingsImage />
      </ImageWrapper>
      <Button onClick={ () => console.log('clicked') }>Login</Button>
      <p>You do not have a account yet? Sign in here.</p>
    </Wrapper>
  )
}

export default Home
