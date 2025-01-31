import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import Efood from '../../models/Efood'

import macarrao from '../../assets/macarrao.png'

const promocoes: Efood[] = [
  {
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: macarrao,
    id: 1
  },
  {
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: macarrao,
    id: 2
  },
  {
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: macarrao,
    id: 3
  },
  {
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: macarrao,
    id: 4
  }
]

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <ProductList efood={promocoes} background="red" />
    </div>
  </>
)

export default Home
