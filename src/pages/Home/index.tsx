import React from 'react'
import {Input} from '../../components/Input'
import {Stats} from '../../components/Stats'
import {Tasks} from '../../components/Tasks'
import {Content} from '../../components/Content'
import {Header} from '../../components/Header'

const Home = () => {
    return (
        <Content>
            <Header />
            <Stats />
            <Tasks />
            <Input />
        </Content>
    )
}

export default Home
