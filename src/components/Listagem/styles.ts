import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  padding: 8px;
  padding-bottom: 48px;
  position: relative;
  color: ${cores.rosaEscuro};

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Descricao = styled.div`
  line-height: 22px;
  display: block;
  padding: 8px 8px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.rosaEscuro};
  background-color: ${cores.corDoCard};
`

export const Titulo = styled.h3`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
`

export const SubTitulo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Botao = styled.button`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  width: 82px;
  height: 24px;
  color: ${cores.rosaClaro};
  background-color: ${cores.rosaEscuro};
  border: none;
  cursor: pointer;
`
export const Img = styled.img`
  display: flex;
  justify-content: space-between;
`
export const Paragrafo = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 45px;
`
