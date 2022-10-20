import React from 'react'
import { RiCalendar2Line, RiHome4Fill, RiMapPinUserFill } from 'react-icons/ri'
import styled from 'styled-components'
import DrawerItem from './DrawerItem'

export interface IRoutes {
  key?: string
  name?: string
  icon?: string
  route?: string
}

export interface IDrawer {
  isMobile?: boolean
  show?: boolean
}

const Drawer: React.FC<IDrawer> = ({ isMobile = false }) => {
  return (
    <StyledDrawer
      isMobile={isMobile}
      style={
        {
          // '--d': isMobile ? (show ? 'inline-block' : 'hidden') : 'inline-block',
        } as React.CSSProperties
      }
    >
      <div className="menu">
        <DrawerItem label="Beranda" icon={<RiHome4Fill size={24} />} />
        <DrawerItem
          label="Driver Management"
          icon={<RiMapPinUserFill size={24} />}
          href="/"
        />
        <DrawerItem label="Pickup" icon={<RiCalendar2Line size={24} />} />
      </div>
    </StyledDrawer>
  )
}

const StyledDrawer = styled.div<IDrawer>`
  background-color: white;
  position: fixed;
  z-index: 3;
  height: 100vh;
  // display: var(--d);
  width: ${({ isMobile }) => (isMobile ? '100%' : '280px')};

  .menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 64px;
  }
`

export default Drawer
