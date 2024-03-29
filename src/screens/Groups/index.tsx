import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Container } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { Loading } from "@components/Loading";


export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()

  const handleNewGroup = () => {
    navigation.navigate('new')
  }

  const fetchGroups = async () => {
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)

    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenGroup = (group: string) => {
    navigation.navigate('players', { group: group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subTitle="Jogue com sua turma"
      />

      {isLoading ? <Loading /> :
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => <GroupCard title={item} onPress={() => handleOpenGroup(item)} />}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
        />
      }

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </Container>
  )
}

