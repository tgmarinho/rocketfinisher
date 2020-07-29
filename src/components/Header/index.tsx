import React from 'react'
import {Heading} from '../Heading'
import {Switch} from '../Switch'
import {useRecoilState} from 'recoil'
import {darkModeState} from '../../atoms'

import {Container} from './styles'

export const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)

    return (
        <Container>
            <Heading />
            <Switch value={darkMode} onChange={setDarkMode} />
        </Container>
    )
}
