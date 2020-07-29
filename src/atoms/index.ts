import {atom, atomFamily, useRecoilState, SerializableParam} from 'recoil'

export interface ITask {
    label: string
    complete: boolean
}

export const darkModeState = atom({
    key: 'darkMode',
    default: true,
})

export const tasksState = atom<number[]>({
    key: 'tasks',
    default: [],
})

export const taskState = atomFamily<ITask, SerializableParam>({
    key: 'task',
    default: {} as ITask,
})
