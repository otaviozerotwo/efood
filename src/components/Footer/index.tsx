import { Link } from 'react-router-dom'
import { Container, Copyright, Icon, Links, Logo } from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram_logo.svg'
import facebook from '../../assets/images/facebook_logo.svg'
import twitter from '../../assets/images/twitter_logo.svg'

const Footer = () => (
  <Container>
    <Link to="/">
      <Logo src={logo} alt="efood logo" />
    </Link>
    <Links>
      <li>
        <Icon
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram logo" />
        </Icon>
      </li>
      <li>
        <Icon
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook logo" />
        </Icon>
      </li>
      <li>
        <Icon
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter logo" />
        </Icon>
      </li>
    </Links>
    <Copyright>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Copyright>
  </Container>
)

export default Footer
