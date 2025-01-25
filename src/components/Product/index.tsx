import Tag from '../Tag'
import { Card, Categoria, Descriçao, Fundo, Nota, Titulo } from './styles'

import macarrao from '../../assets/macarrao.png'

const Product = () => (
  <Card>
    <img src={macarrao} alt="macarrao" />
    <Tag size="big">Destaque da semana</Tag>
    <Titulo>Hioki Sushi </Titulo>
    <Categoria>Japonesa</Categoria>
    <Fundo>
      <Nota src="//placehold.co/50x21" alt="nota" />
      <Descriçao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </Descriçao>
      <button>saiba mais</button>
    </Fundo>
  </Card>
)

export default Product
