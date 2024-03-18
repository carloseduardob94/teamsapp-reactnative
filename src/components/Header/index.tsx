import { useNavigation } from "@react-navigation/native"
import { BackIcon, Container, Logo, BackButton } from "./styles"
import logoImg from '@assets/logo.png'

interface Props {
  showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: Props) => {
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.navigate('groups')
  }


  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  )
}