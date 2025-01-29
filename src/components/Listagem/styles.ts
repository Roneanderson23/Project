import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  padding: 8px;
  padding-bottom: 48px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  line-height: 21.09px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`
export const Descricao = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  padding: 8px 8px;
  padding-top: 45px;
  padding-bottom: 48px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.rosaEscuro};
  background-color: ${cores.corDoCard};
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
