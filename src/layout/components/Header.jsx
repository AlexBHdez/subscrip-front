import React from 'react'
import styled from 'styled-components'
import { Burger } from '../../ui'
import { ReactComponent as BackIcon } from '../../images/svg/back_icon.svg'

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`

const Header = () => (
  <HeaderWrap>
    <BackIcon />
    <Burger />
  </HeaderWrap>
)

export default Header
