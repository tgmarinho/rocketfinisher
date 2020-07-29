import React, {useState} from 'react'
import {InsertInput} from './styles'
import {useRecoilState, useRecoilCallback} from 'recoil'
import {ITask, taskState, tasksState} from '../../atoms'
import {Container as TaskContainer} from '../Task/styles'

export const Input: React.FC = () => {
    const [label, setLabel] = useState('')
    const [tasks, setTasks] = useRecoilState(tasksState)

    const insertTask = useRecoilCallback(({set}) => {
        return (label: string) => {
            const newTaskId = tasks.length
            set(tasksState, [...tasks, newTaskId])
            set(taskState(newTaskId), {
                label: label,
                complete: false,
            })
        }
    })

    return (
        <TaskContainer>
            <InsertInput
                placeholder="Insert a new task..."
                type="search"
                autoComplete="off"
                value={label}
                onChange={({currentTarget}) => {
                    setLabel(currentTarget.value)
                }}
                onKeyUp={({keyCode}) => {
                    if (keyCode === 13) {
                        // Insert new task
                        insertTask(label)
                        setLabel('')
                    }
                }}
            />
        </TaskContainer>
    )
}
