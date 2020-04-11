import React from 'react'
import styled from 'styled-components'
import { Burger } from '../../ui'
import { ReactComponent as BackIcon } from '../../images/svg/back_icon.svg'

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`

const Header = () => (
  <HeaderWrap>
    <BackIcon />
    <Burger />
  </HeaderWrap>
)

export default Header
