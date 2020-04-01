import React from 'react'
import styled from 'styled-components'
import { FiveHundredPx } from '@styled-icons/boxicons-logos'
import { ReactComponent as SavingsImage } from '../../images/svg/undraw_savings.svg'
import { Button } from '../../ui'
import { useHistory } from 'react-router-dom'

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

const Link = styled.span`
  cursor: pointer;
  font-weight: 500;
`


const Home = () => {
  const history = useHistory()
  const loginButtonHandle = () => history.push('/login')
  const signupLinkHandle = () => history.push('/signup')

  return (
    <Wrapper>
      <div>
        <FiveHundredPx size='50' />
        <h1>Subscrip</h1>
      </div>
      <ImageWrapper>
        <SavingsImage />
      </ImageWrapper>
      <Button onClick={ loginButtonHandle }>Login</Button>
      <p>You don't have a account yet? <Link onClick={ signupLinkHandle }>Sign in here.</Link></p>
    </Wrapper>
  )
}

export default Home
