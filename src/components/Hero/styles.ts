import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroTopo = styled.header`
  width: 100%;
  height: 384px;
  top: -24px;
  gap: 0px;
  opacity: 0px;
  padding-top: 260px;
`

export const Img = styled.img`
  position: absolute;
  top: 40px;
  height: 60px;
  left: 500px;
  width: 125px;
  height: 57.5px;
  gap: 0px;
  opacity: 0px;
`
export const Titulo = styled.h2`
  color: ${cores.rosaEscuro};
  position: absolute;
  max-width: 540px;
  left: 300px;
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  text-underline-position: under;
  text-decoration-skip-ink: none;
`
