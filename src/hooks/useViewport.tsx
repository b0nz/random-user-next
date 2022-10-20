import React from 'react'

const viewportContext = React.createContext({ width: 0, height: 0 })

export const ViewportProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  React.useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  )
}

export const useViewport = () => {
  const { width, height } = React.useContext(viewportContext)
  const breakpoint = 768
  const isMobile = width < breakpoint

  return { width, height, isMobile }
}
