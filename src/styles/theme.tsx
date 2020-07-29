import React from 'react'
import {
    ThemeProvider as StyledThemeProvider,
    createGlobalStyle,
} from 'styled-components'

export const colors = {
    dark: {
        background: '#3F3F3E',
        card: '#8257E5',
        text: '#ffffff',
        placeholder: '#ffffff',
    },
    light: {
        background: '#e9ecf3',
        card: '#ffffff',
        text: '#20252a',
        placeholder: '',
    },
}

export const GlobalStyles = createGlobalStyle`


    * {
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body {
        background-color: ${(props: any) => props.theme.background};
        color: ${(props: any) => props.theme.text};
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        box-sizing: border-box;
        font-family: Roboto;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
    }

    #root {
        width: 100vw;
    }

    * {
        transition: 0.2s color ease-in-out, 0.2s background-color ease-in-out;
    }
`

type ThemeProviderProps = {darkMode: boolean}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    darkMode,
    children,
}) => {
    return (
        <StyledThemeProvider theme={darkMode ? colors.dark : colors.light}>
            {children}
        </StyledThemeProvider>
    )
}
