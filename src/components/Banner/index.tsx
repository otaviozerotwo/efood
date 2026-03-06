import bgImage from '../../assets/images/img_banner.png'
import { Container } from '../../styles'
import { BackGroundImage } from './styles'

type Props = {
  category: string
  title: string
}

const Banner = ({ category, title }: Props) => (
  <BackGroundImage style={{ backgroundImage: `url(${bgImage})` }}>
    <Container>
      <h2>{category}</h2>
      <h1>{title}</h1>
    </Container>
  </BackGroundImage>
)

export default Banner
