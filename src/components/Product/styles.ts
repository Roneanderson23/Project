import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Card = styled.div`
  margin-bottom: 32px;
  background-color: ${cores.corDoCard};

  ${TagContainer} {
    position: absolute;
    top: 16px;
    left: 250px;
    padding: 8px;
  }
`

export const Imagem = styled.div`
  width: 472px;
  height: 217px;
  top: 440px;
  left: 171px;
`
export const Fundo = styled.div`
  width: 472px;
  height: 181px;
  top: 657px;
  left: 171px;
`
export const Titulo = styled.h2`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  line-height: 22px;
`
export const Nota = styled.img`
  width: 55px;
  height: 21px;
  top: 638px;
  left: 469px;
`

export const Descriçao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Categoria = styled.h3`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  position: absolute;
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  padding: 8px;
  top: 16px;
  left: 398px;
`
