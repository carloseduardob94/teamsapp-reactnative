import { useState } from "react"
import { Container, Content, Icon } from "./styles"

import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { useNavigation } from "@react-navigation/native"

export const NewGroup = () => {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  const handleNewGroup = () => {
    navigation.navigate('players', { group: group })
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subTitle="Crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  )
}