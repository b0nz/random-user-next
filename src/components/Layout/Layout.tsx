import { useViewport } from '@/hooks/useViewport'
import Drawer from '@/components/Drawer'
import Header from '@/components/Header'
import styled from 'styled-components'
import React from 'react'

export interface ILayout {
  children?: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const { isMobile } = useViewport()

  const [drawer, setDrawer] = React.useState(!isMobile)

  return (
    <Wrapper isMobile={isMobile}>
      <Header isMobile={isMobile} drawer={drawer} handleDrawer={setDrawer} />
      <>
        {!isMobile && <Drawer isMobile={isMobile} show={drawer} />}
        <main data-testid="layout-content">{children}</main>
      </>
    </Wrapper>
  )
}

interface IWrapper {
  children: React.ReactNode
  isMobile: boolean
}

const Wrapper = styled.div<IWrapper>`
  min-height: 100vh;
  background-color: var(--grey-50);

  main {
    display: flex;
    flex-direction: column;
    padding: 32px 0;
    margin-top: ${({ isMobile }) => (isMobile ? '65px' : '78px')};
    margin-left: ${({ isMobile }) => (isMobile ? 0 : '280px')};
    gap: 32px;
  }
`

export default Layout
