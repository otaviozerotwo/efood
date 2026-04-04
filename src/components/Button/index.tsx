import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  className?: string
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  className,
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        className={className}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title} className={className}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
