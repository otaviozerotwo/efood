import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Image } from './styles'

const Logo = () => (
  <Link to="/">
    <h1>
      <Image src={logo} alt="EFOOD" />
    </h1>
  </Link>
)

export default Logo
