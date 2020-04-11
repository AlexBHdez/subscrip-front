import React from 'react'
import styled from 'styled-components'

const StyledSectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: ${ ({ theme }) => theme.colors.sectionTitle };
`

const SectionTitle = ({ children }) => {
  return (
    <StyledSectionTitle>
      { children }
    </StyledSectionTitle>
  )
}

export default SectionTitle
