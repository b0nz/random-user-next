import { Dispatch, HTMLAttributes, SetStateAction } from 'react'

export interface IHeader extends HTMLAttributes<HTMLElement> {
  isMobile?: boolean
  drawer?: boolean
  handleDrawer?: Dispatch<SetStateAction<boolean>>
}
