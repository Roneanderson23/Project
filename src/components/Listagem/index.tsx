import Tag from '../Tag'
import { Titulo, Card, Descricao, Infos } from './styles'

type Props = {
  image: string

  title: string
  description: string
  infos: string[]
}

const Listagem = ({ title, description, image, infos }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
    </div>
  </Card>
)

export default Listagem
