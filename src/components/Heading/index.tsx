import React from 'react'

import {Container} from './styles'

export const Heading: React.FC = () => {
    return (
        <Container>
            <span role="img" aria-label="Taskhero logo">
                🚀
            </span>{' '}
            RocketFinisher
        </Container>
    )
}
