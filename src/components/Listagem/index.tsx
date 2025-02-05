import Tag from '../Tag'
import {
  Titulo,
  Card,
  Descricao,
  Infos,
  SubTitulo,
  Botao,
  Img,
  Paragrafo
} from './styles'

import nota from '../../assets/nota.png'

type Props = {
  image: string
  title: string
  paragraph: string
  infos: string[]
}

const Listagem = ({ title, paragraph, image, infos }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Descricao>
      <SubTitulo>
        {' '}
        <Titulo>{title}</Titulo>
        <Img src={nota} alt={title} />
      </SubTitulo>
      <Paragrafo>{paragraph}</Paragrafo>
      <Botao>Saiba mais</Botao>
    </Descricao>
  </Card>
)

export default Listagem
