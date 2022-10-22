import Image from 'next/image'
import styled from 'styled-components'
import { RiAccountCircleFill, RiMenuFill } from 'react-icons/ri'
import { THEME } from '@/utils/global-style'
import Button from '@/components/Button'
import React from 'react'
import Link from 'next/link'
import { IHeader } from './Header.model'

const Header: React.FC<IHeader> = ({
  isMobile = false,
  drawer = false,
  handleDrawer = () => {},
  ...props
}) => {
  return (
    <StyledHeader
      style={
        {
          '--h': isMobile ? '65px' : '78px',
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="item-wrapper">
        {isMobile && (
          <Button
            data-testid="drawer-btn"
            variant="icon"
            size="xs"
            htmlType="button"
            onClick={() => handleDrawer(!drawer)}
          >
            <RiMenuFill
              size={isMobile ? 28 : 36}
              color={THEME.colors['black-50']}
            />
          </Button>
        )}
        <Link href="/">
          <a className="logo">
            <Image
              src="/shipper.png"
              alt="logo"
              width={isMobile ? '120px' : '130px'}
              height={isMobile ? '25px' : '30px'}
            />
          </a>
        </Link>
      </div>
      <div>
        <Button
          className="item-wrapper"
          data-testid="profile-btn"
          variant="icon"
          size="sm"
        >
          {!isMobile && (
            <h3 data-testid="greeting">
              Hello, <span className="logged-user">Shipper User</span>
            </h3>
          )}
          <RiAccountCircleFill
            size={isMobile ? 28 : 36}
            color={THEME.colors.grey}
          />
        </Button>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  height: var(--h);
  width: 100%;
  z-index: 4;

  .item-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 16px;
    .logo {
      display: flex;
      align-items: center;
    }
    h3 {
      margin: 0;
      font-weight: normal;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .logged-user {
        color: var(--primary);
      }
    }
  }
`

export default Header
