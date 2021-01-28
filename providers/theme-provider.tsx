import React, { useEffect } from 'react'

const ThemeProvider = React.createContext<Partial<any>>({})
type Props = {
  children: React.ReactNode
  theme: string
}
const Provider = ({ children, theme }: Props): React.ReactElement => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
    import '../styles' + theme + '.less'
  }, [theme])

  return <ThemeProvider.Provider value={{}}>{children}</ThemeProvider.Provider>
}

const Consumer = ThemeProvider.Consumer

export { ThemeProvider, Provider, Consumer }
