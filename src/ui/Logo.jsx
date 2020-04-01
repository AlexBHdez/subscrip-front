import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  top: 20px;
  left: 20px;
  text-align: right;
`

const Brand = styled.h1`
  font-weight: 700;
  font-size: 20px;
`

const Author = styled.span`
  font-size: 12px;
`

const Logo = () => (
  <Wrap>
    <Brand>subscrip</Brand>
    <Author>by alexbhdez</Author>
  </Wrap>
)

export default Logo
