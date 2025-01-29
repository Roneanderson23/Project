import macarrao from '../../assets/macarrao.png'
import macarrao1 from '../../assets/macarrão.png'

import Listagem from '../Listagem'

import { Container, List } from './styles'
type Props = {
  background: '#FFFFFF'
}

const ProductList = ({ background }: Props) => (
  <Container>
    <div className="container">
      <List>
        <Listagem
          image={macarrao}
          infos={['Destaque da semana', 'Japonesa']}
          title="Hioko sushis"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        />
        <Listagem
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao1}
          infos={['Italiana']}
        />
        <Listagem
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao1}
          infos={['Italiana']}
        />
        <Listagem
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao1}
          infos={['Italiana']}
        />
        <Listagem
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao1}
          infos={['Italiana']}
        />
        <Listagem
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={macarrao1}
          infos={['Italiana']}
        />
      </List>
    </div>
  </Container>
)

export default ProductList
