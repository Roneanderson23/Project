import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 0px 1px 1px 1px ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  background-color: ${cores.rosaEscuro};
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  aling-items: center;
  padding: 4px 6px;
`
export const ButtonLink = styled(Link)`
  border: 0px 1px 1px 1px ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  background-color: ${cores.rosaEscuro};
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  aling-items: center;
  padding: 4px 6px;
  text-decoration: none;
`
