import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Container, Content, Icon } from "./styles"

import { groupCreate } from "@storage/group/groupCreate"
import { AppError } from "@utils/AppError"

import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { Alert } from "react-native"

export const NewGroup = () => {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  const handleNewGroup = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
      }

      await groupCreate(group)
      navigation.navigate('players', { group: group })

    } catch (error) {

      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)

      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo')
        console.log(error)
      }

    }
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