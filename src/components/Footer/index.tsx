import Logo from '../Logo'
import instagram from '../../assets/images/instagram_logo.svg'
import facebook from '../../assets/images/facebook_logo.svg'
import twitter from '../../assets/images/twitter_logo.svg'
import * as S from './styles'

const Footer = () => (
  <S.Container>
    <Logo />
    <S.Links>
      <li>
        <S.Icon
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram logo" />
        </S.Icon>
      </li>
      <li>
        <S.Icon
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook logo" />
        </S.Icon>
      </li>
      <li>
        <S.Icon
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter logo" />
        </S.Icon>
      </li>
    </S.Links>
    <S.Copyright>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Copyright>
  </S.Container>
)

export default Footer
