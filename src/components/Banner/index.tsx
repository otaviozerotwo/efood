import bgImage from '../../assets/images/img_banner.png'
import { Container } from '../../styles'
import { BackGroundImage, Category, Title } from './styles'

type Props = {
  category: string
  title: string
}

const Banner = ({ category, title }: Props) => (
  <BackGroundImage style={{ backgroundImage: `url(${bgImage})` }}>
    <Container>
      <Category>{category}</Category>
      <Title>{title}</Title>
    </Container>
  </BackGroundImage>
)

export default Banner
