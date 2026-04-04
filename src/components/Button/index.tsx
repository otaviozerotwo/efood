import { ButtonContainer, ButtonLink } from './styles'

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
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        className={className}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} className={className}>
      {children}
    </ButtonLink>
  )
}

export default Button
