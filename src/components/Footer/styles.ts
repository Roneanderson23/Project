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
  padding: 2px 460px;
  margin: auto;
  height: 58px;
`
export const Nota = styled.img`
  padding: 34px 474px;
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
`
export const Paragrafo = styled.p`
  display: grid;
  text-align: center;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  height: 24px;
  paddin-bottom: 40px;
  color: ${cores.rosaEscuro};
`
