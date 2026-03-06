import { Link } from 'react-router-dom'
import { BackGroundImage } from './styles'
import bgImage from '../../assets/images/hero_background.svg'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <BackGroundImage style={{ backgroundImage: `url(${bgImage})` }}>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
    <h2>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </h2>
  </BackGroundImage>
)

export default Hero
