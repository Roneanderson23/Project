import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import Efood from '../../models/Efood'

import macarrao from '../../assets/macarrao.png'
import macarrao1 from '../../assets/macarrão.png'

const promocoes: Efood[] = [
  {
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    paragraph:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: macarrao,
    id: 1
  },
  {
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    paragraph:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao1,
    id: 2
  },
  {
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    paragraph:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao1,
    id: 3
  },
  {
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    paragraph:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao1,
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
