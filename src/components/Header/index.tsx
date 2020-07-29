import React from 'react'
import {Heading} from '../Heading'
import {Switch} from '../Switch'
import {atom, useRecoilState} from 'recoil'

import {Container} from './styles'

export const darkModeState = atom({
    key: 'darkMode',
    default: true,
})

export const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)

    return (
        <Container>
            <Heading />
            <Switch value={darkMode} onChange={setDarkMode} />
        </Container>
    )
}
