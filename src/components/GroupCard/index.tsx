import { Container, Title, Icon } from "./styles"
import { TouchableOpacityProps } from 'react-native'

type GroupCardProps = TouchableOpacityProps & {
  title: string
}

export const GroupCard = ({ title, ...rest }: GroupCardProps) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}