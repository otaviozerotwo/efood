import React from 'react'
import * as S from './styles'
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
  <S.CardContainer bgColor={bgColor}>
    <CardImage src={image ?? ''} alt={imageAlt ?? ''} padding={padding} />
    <S.Badges>{badges}</S.Badges>
    <S.CardBody>{children}</S.CardBody>
  </S.CardContainer>
)

export default Card
