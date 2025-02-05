import Efood from '../../models/Efood'

import Listagem from '../Listagem'

import { Container, List } from './styles'

export type Props = {
  background: 'red'
  efood: Efood[]
}

const ProductList = ({ background, efood }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {efood.map((efood) => (
          <Listagem
            key={efood.id}
            image={efood.image}
            infos={efood.infos}
            title={efood.title}
            paragraph={efood.paragraph}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
