import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  font-size: ${(props) => (props.size === 'big' ? '12px' : '6px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 12px' : '4px 6px')};
  display: inline-block;
`
