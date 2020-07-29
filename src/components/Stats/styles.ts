import styled from 'styled-components'
import {Card} from '../Card'

export const StatContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.text};
`

export const StatValue = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
`

export const StatLabel = styled.div`
    font-size: 11px;
    text-transform: uppercase;
`

export const Divider = styled.div`
    width: 1px;
    height: 42px;
    background-color: ${(props) => props.theme.text};
    opacity: 0.3;
`

export const Container = styled(Card)`
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 20px;
`
