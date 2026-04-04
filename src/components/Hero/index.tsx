import { BackGroundImage } from './styles'
import bgImage from '../../assets/images/hero_background.svg'
import Logo from '../Logo'

const Hero = () => (
  <BackGroundImage style={{ backgroundImage: `url(${bgImage})` }}>
    <Logo />
    <h2>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </h2>
  </BackGroundImage>
)

export default Hero
