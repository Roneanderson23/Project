import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaClaro: ' #FFEBD9',
  rosaEscuro: ' #E66767',
  corDeFundo: ' #FFF8F2',
  corDoCard: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Robot, sans-serif;
      list-style: none;


      .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        background-color: ${cores.rosaClaro};
      }
    }
`
