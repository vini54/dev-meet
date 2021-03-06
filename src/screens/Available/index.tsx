import { FlatList } from "react-native";
import React from "react";
import {
  BackText,
  BackView,
  Container,
  Heading1,
  HeadText,
  View1,
} from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { propsNavigationStack, propsStack } from "../../Models";
import { Card } from "./Card";
import { Api } from "../../services/Api";
import { Ievent } from "../../interfaces";
import { Skeleton, VStack } from "native-base";

export const Available = () => {
  const Navigation = useNavigation<propsStack>();
  const route = useRoute<RouteProp<propsNavigationStack, "Available">>();

  const TipoId = route.params.tipoId;

  const [loaded, setLoaded] = React.useState(false);
  const [eventList, setEvents] = React.useState<Ievent[]>([]);

  React.useEffect(() => {
    Api.get<Ievent[]>("/events", { params: { tipoId: `eq.${TipoId}` } })
      .then(({ data }) => setEvents(data))
      .catch((response) => console.log(response));
  }, []);

  return (
    <Container>
      <View1>
        <Heading1>Eventos disponíveis</Heading1>

        <BackView onPress={() => Navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="#c6c6c6" />
          <BackText>Voltar</BackText>
        </BackView>
      </View1>

      <HeadText>Selecione o evento desejado. E espere sua data!</HeadText>

      <FlatList
        style={{ width: "90%", flex: 1, marginVertical: 20 }}
        showsVerticalScrollIndicator={false}
        data={eventList}
        renderItem={({ item }) => <Card data={item} />}
        ListEmptyComponent={
          <VStack space="10">
            <Skeleton h="180" rounded="10" />
            <Skeleton h="180" rounded="10" />
            <Skeleton h="180" rounded="10" />
            <Skeleton h="180" rounded="10" />
          </VStack>
        }
      />
    </Container>
  );
};
