import styled from 'styled-components'
import React from 'react'
import { ICard } from './Card.models'

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
