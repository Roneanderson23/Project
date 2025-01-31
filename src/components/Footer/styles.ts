import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaClaro};
  padding: 40px 0;
  width: 100%;
  height: 298px;
  top: 120px;
  gap: 0px;
  opacity: 0px;
  position: relative;
`
export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  left: 568px;
  gap: 0px;
  opacity: 0px;
  position: absolute;
`
export const Nota = styled.img`
  width: 88px;
  display: block;
  height: 24px;
  top: 130px;
  left: 590px;
  gap: 0px;
  opacity: 0px;
  background-color: red;
  position: absolute;
  color: ${cores.rosaEscuro};
`
export const Paragrafo = styled.p`
  top: 232px;
  position: absolute;
  left: 300px;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`
