import { Imagem, Titulo, Img } from './styles'

import heroImg from '../../assets/Vector.png'
import heroimage from '../../assets/logo.png'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="container">
      <Img src={heroimage} />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </Imagem>
)
export default Hero
