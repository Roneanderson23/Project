import { HeroTopo, Img, Titulo } from './styles'

import logo from '../../assets/logo.png'
import Vetor from '../../assets/Vector.png'

const Hero = () => (
  <HeroTopo style={{ backgroundImage: `url(${Vetor})` }}>
    <div>
      <Img className="img" src={logo} alt="efood" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </HeroTopo>
)

export default Hero
