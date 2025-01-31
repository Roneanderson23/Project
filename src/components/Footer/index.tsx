import { Container, Logo, Nota, Paragrafo } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <div>
        <Logo src="//placehold.co/125x51" alt="logo" />
        <Nota src="//placehold.co/88x24" alt="rede sociais" />
        <Paragrafo>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Paragrafo>
      </div>
    </div>
  </Container>
)

export default Footer
