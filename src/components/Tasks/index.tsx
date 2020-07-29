import React from 'react'
import {Task} from '../Task'
import {useRecoilValue} from 'recoil'
import {tasksState} from '../../atoms'

export const Tasks: React.FC = () => {
    const tasks = useRecoilValue(tasksState)
    console.log(tasks)

    return (
        <div>
            {tasks.map((id) => (
                <Task id={id} key={id} />
            ))}
        </div>
    )
}
