import React from 'react'
import checkIconSvg from '../../assets/rocket.svg'
import {atomFamily, useRecoilState} from 'recoil'
import {Container, Check, CheckIcon, UpdateTaskInput} from './styles'

export const taskState = atomFamily({
    key: 'task',
    default: {
        label: '',
        complete: false,
    },
})

export const Task: React.FC<{id: number}> = ({id}) => {
    const [task, setTask] = useRecoilState(taskState(id))

    console.log(task)

    return (
        <Container onClick={() => {}}>
            <Check
                checked={task.complete}
                onClick={() => {
                    setTask({
                        label: task.label,
                        complete: !task.complete,
                    })
                }}
            >
                <CheckIcon
                    src={checkIconSvg}
                    style={{opacity: task.complete ? 1 : 0}}
                />
            </Check>
            <UpdateTaskInput
                placeholder="Insert a new task..."
                type="search"
                autoComplete="off"
                value={task.label}
                onChange={({currentTarget}) => {
                    setTask({
                        label: currentTarget.value,
                        complete: task.complete,
                    })
                }}
            />
        </Container>
    )
}
