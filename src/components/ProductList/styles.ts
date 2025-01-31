import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Listagem/styles'

export const Container = styled.section<Omit<Props, 'title' | 'efood'>>`
  padding: 32px 0;
  background-color${(props) =>
      props.background === 'red' ? cores.corDeFundo : cores.rosaClaro}
    ${Card} {
    background-color: ${(props) =>
      props.background === 'red' ? cores.rosaClaro : cores.corDeFundo};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`
