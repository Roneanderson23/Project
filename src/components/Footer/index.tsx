import { Container, Logo, Nota, Paragrafo } from './styles'

import sociais from '../../assets/redes sociais.png'
import logo from '../../assets/logo.png'

const Footer = () => (
  <Container>
    <div className="container">
      <div>
        <Logo src={logo} alt="logo" />
        <Nota src={sociais} alt="rede sociais" />
        <Paragrafo>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </Paragrafo>
      </div>
    </div>
  </Container>
)

export default Footer
