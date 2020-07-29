import React from 'react'
import {ThemeProvider, GlobalStyles} from './styles/theme'
import {useRecoilValue} from 'recoil'
import Home from './pages/Home'
import {darkModeState} from './components/Header'

const App = () => {
    const darkMode = useRecoilValue(darkModeState)

    return (
        <ThemeProvider darkMode={darkMode}>
            <GlobalStyles />
            <Home />
        </ThemeProvider>
    )
}

export default App
