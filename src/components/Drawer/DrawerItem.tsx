import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { IDrawerItem } from './DrawerItem.model'

const DrawerItem: React.FC<IDrawerItem> = ({ icon, label, href = '' }) => {
  const router = useRouter()

  return (
    <StyledDrawerItem>
      <Link href={href as string}>
        <a className={router.pathname === href ? 'active' : ''}>
          <span data-testid="drawer-icon">{icon}</span>
          <p data-testid="drawer-label">{label}</p>
        </a>
      </Link>
    </StyledDrawerItem>
  )
}

const StyledDrawerItem = styled.div`
  font-size: 1rem;

  a {
    text-decoration: unset;
    display: flex;
    align-items: center;
    gap: 12px;
    background: transparent;
    padding: 12px 24px;
    margin: 0;
    color: var(--black);
    border-left: 5px solid transparent;

    p {
      margin: 0;
    }

    &:hover {
      background-color: lightgrey;
    }
  }
  a.active {
    color: var(--primary);
    border-left: 5px solid var(--primary);
    font-weight: bold;
  }
`

export default DrawerItem
