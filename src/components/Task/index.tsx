import React from 'react'
import checkIconSvg from '../../assets/rocket.svg'
import {useRecoilState} from 'recoil'
import {Container, Check, CheckIcon, UpdateTaskInput} from './styles'
import {taskState} from '../../atoms'

export const Task: React.FC<{id: number}> = ({id}) => {
    const [task, setTask] = useRecoilState(taskState(id))

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
