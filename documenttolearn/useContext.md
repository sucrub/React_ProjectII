useContext là khái niệm giúp truyền dữ liệu từ component cha xuống component con mà không cần qua props
- 1. Create context
- 2. Provider (được sử dụng để truyền dữ liệu)
- 3. Consumer (sử dụng để nhận dữ liệu ở component con)
vd1 : 
// ThemeContext.js
import { useState, createContext } from 'react'
const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext, ThemeProvider }

// Paragraph.js
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        <p className={context.theme}>
            abcdefghijklmnopqrstuvwxyz
        </p>
    )
}
export default Paragraph

// App.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'
import Content from './Content'
import './App.css';

function App() {
  const context = useContext(ThemeContext)
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
      <Content />
    </div>
  )
}

// index.js
import {ThemeProvider} from './ThemeContext'

<ThemeProvider><App/></ThemeProvider>

vd2:


