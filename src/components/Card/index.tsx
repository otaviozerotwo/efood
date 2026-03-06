import React from 'react'
import { CardContainer, CardBody, Badges } from './styles'
import CardImage from '../CardImage'

export type Props = {
  image?: string
  imageAlt?: string
  badges?: React.ReactNode
  children?: React.ReactNode
  bgColor: string
  padding: string
}

const Card = ({
  image,
  imageAlt,
  badges,
  children,
  bgColor,
  padding
}: Props) => (
  <CardContainer bgColor={bgColor}>
    <CardImage src={image ?? ''} alt={imageAlt ?? ''} padding={padding} />
    <Badges>{badges}</Badges>
    <CardBody>{children}</CardBody>
  </CardContainer>
)

export default Card
