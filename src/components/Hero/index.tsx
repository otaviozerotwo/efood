import { Link } from 'react-router-dom'
import { BackGroundImage, Logo, Subtitle } from './styles'
import bgImage from '../../assets/images/hero_background.svg'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <BackGroundImage style={{ backgroundImage: `url(${bgImage})` }}>
    <Link to="/">
      <Logo src={logo} alt="logo" />
    </Link>
    <Subtitle>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Subtitle>
  </BackGroundImage>
)

export default Hero
