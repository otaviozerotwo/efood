import bgImage from '../../assets/images/img_banner.png'
import { BackGroundImage } from './styles'

type Props = {
  category: string
  title: string
}

const Banner = ({ category, title }: Props) => (
  <BackGroundImage style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="container">
      <h2>{category}</h2>
      <h1>{title}</h1>
    </div>
  </BackGroundImage>
)

export default Banner
