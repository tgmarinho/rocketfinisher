import React from 'react'
import {selector, useRecoilValue} from 'recoil'
import {tasksState} from '../Tasks'
import {taskState} from '../Task'

import {Container, Divider, StatContainer, StatValue, StatLabel} from './styles'

const Stat: React.FC<{label: string; value: string | number}> = ({
    label,
    value,
}) => {
    return (
        <StatContainer>
            <StatValue>{value}</StatValue>
            <StatLabel>{label}</StatLabel>
        </StatContainer>
    )
}

const tasksCompleteState = selector({
    key: 'tasksComplete',
    get: ({get}) => {
        const taskIds = get(tasksState)
        const tasks = taskIds.map((id) => {
            return get(taskState(id))
        })

        return tasks.filter((task) => task.complete).length
    },
})

const tasksRemainingState = selector({
    key: 'tasksRemaining',
    get: ({get}) => {
        const taskIds = get(tasksState)
        const tasks = taskIds.map((id) => {
            return get(taskState(id))
        })

        return tasks.filter((task) => !task.complete).length
    },
})

export const Stats: React.FC = () => {
    const tasksComplete = useRecoilValue(tasksCompleteState)
    const tasksRemaining = useRecoilValue(tasksRemainingState)

    return (
        <Container>
            <Stat label="Tasks Complete ✅" value={tasksComplete} />
            <Divider />
            <Stat label="Tasks Remaining" value={tasksRemaining} />
        </Container>
    )
}
