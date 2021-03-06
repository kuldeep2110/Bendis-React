import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Box, CardProps } from '@pancakeswap/uikit'
import bg from '../../../img/main-bg/bg.png';

const StyledCard = styled(Card)<{ background: string; rotation?: string }>`
  height: fit-content;
  box-sizing: border-box;
  width: 100%;
  max-width: 350px;
  text-align: center;
  margin: auto;
  margin-bottom: 10px;

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

const StyledCardBody = styled(CardBody)`
  padding: 0px;
  // background-color: #ffa9017a;
  color: white;
`

const IconWrapper = styled(Box)<{ rotation?: string }>`
  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

interface IconCardProps extends IconCardData, CardProps {
  children: ReactNode
}

export interface IconCardData {
  background?: string
  borderColor?: string
  rotation?: string
}

const IconCard: React.FC<IconCardProps> = ({ background, borderColor, rotation, children, ...props }) => {
  return (
    <StyledCard background={bg} borderBackground={borderColor} rotation={rotation} {...props}>
      <StyledCardBody>
        {children}
      </StyledCardBody>
    </StyledCard>
  )
}

export default IconCard
