import bgImage from '../../assets/images/img_banner.png'
import { Container } from '../../styles'
import { BackGroundImage, Category, Title } from './styles'

const Banner = () => (
  <BackGroundImage style={{ backgroundImage: `url(${bgImage})` }}>
    <Container>
      <Category>Italiana</Category>
      <Title>La Dolce Vita Trattoria</Title>
    </Container>
  </BackGroundImage>
)

export default Banner
