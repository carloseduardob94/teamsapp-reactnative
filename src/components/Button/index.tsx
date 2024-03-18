import { TouchableOpacityProps } from 'react-native';

import { Container, Title, ButtonStyleProps } from './styles'

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonStyleProps
}

export const Button = ({ title, type = 'PRIMARY', ...rest }: ButtonProps) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}