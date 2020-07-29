import React from 'react'

import {Container, Toggle, MoonOverlay} from './styles'

type SwitchProps = {
    value: boolean
    onChange: (value: boolean) => void
}

export const Switch: React.FC<SwitchProps> = ({value: on, onChange}) => (
    <Container onClick={() => onChange(!on)}>
        <Toggle
            style={{
                transform: `translateX(${on ? 30 : 0}px)`,
            }}
        >
            <MoonOverlay
                style={{
                    transform: `scale(${on ? 1 : 0})`,
                }}
            />
        </Toggle>
    </Container>
)
