import React from 'react'
import { RiCalendar2Fill, RiHome4Fill, RiMapPinUserFill } from 'react-icons/ri'
import styled from 'styled-components'
import { IDrawer } from './Drawer.model'
import DrawerItem from './DrawerItem'

const Drawer: React.FC<IDrawer> = ({ isMobile = false }) => {
  return (
    <StyledDrawer isMobile={isMobile}>
      <div className="menu">
        <DrawerItem label="Beranda" icon={<RiHome4Fill size={24} />} />
        <DrawerItem
          label="Driver Management"
          icon={<RiMapPinUserFill size={24} />}
          href="/"
        />
        <DrawerItem label="Pickup" icon={<RiCalendar2Fill size={24} />} />
      </div>
    </StyledDrawer>
  )
}

const StyledDrawer = styled.div<IDrawer>`
  background-color: white;
  position: fixed;
  z-index: 3;
  height: 100vh;
  width: ${({ isMobile }) => (isMobile ? '100%' : '280px')};

  .menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 64px;
  }
`

export default Drawer
