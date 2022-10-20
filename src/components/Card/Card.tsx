import styled from 'styled-components'
import { RiMoreLine } from 'react-icons/ri'
import Button from '../Button'
import React from 'react'

export interface ICard extends React.HTMLAttributes<HTMLElement> {
  header?: React.ReactNode
  children?: React.ReactNode
}

const Card: React.FC<ICard> = ({ header, children, ...props }) => {
  return (
    <StyledCard {...props}>
      {header && (
        <>
          <div className="container header" data-testid="card-header">
            {header}
          </div>
          <hr />
        </>
      )}
      <div className="container" data-testid="card-child">
        {children}
      </div>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  background-color: white;
  border-radius: 4px;
  width: max-content;

  hr {
    border-color: var(--grey-50);
    margin: 0;
  }
  .container {
    padding: 16px 24px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export default Card
