import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonIconStyleProps, Container, Icon } from './styles'


type ButtonProps = TouchableOpacityProps & {
  type?: ButtonIconStyleProps
  icon: keyof typeof MaterialIcons.glyphMap
}

export const ButtonIcon = ({ icon, type = 'PRIMARY', ...rest }: ButtonProps) => {
  return (
    <Container>
      <Icon
        name={icon} type={type}
      />

    </Container>
  )
}