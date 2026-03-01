import { Image } from './styles'

export type Props = {
  src: string
  alt: string
  padding: string
}

const CardImage = ({ src, alt, padding }: Props) => (
  <Image src={src} alt={alt} padding={padding} />
)

export default CardImage
