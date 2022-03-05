import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Skeleton, useToast } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { Ievent } from "../../interfaces";
import { propsNavigationStack, propsStack } from "../../Models";
import { Api } from "../../services/Api";
import * as Clipboard from "expo-clipboard";
import {
  BackText,
  BackView,
  Container,
  DateHour,
  DateTime,
  Description,
  HeadDates,
  HeadView,
  Info,
  InfoBold,
  LinkBtn,
  LinkHead,
  LinkText,
  LinkView,
  Title,
} from "./styles";

export const Event = () => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];

  const Navigation = useNavigation<propsStack>();

  const [loaded, setLoaded] = React.useState(false);
  const [eventData, setEventData] = React.useState<Ievent>();
  const [dates, setDates] = React.useState({
    day: 0,
    month: "",
    hour: "",
  });
  const [copyLink, setCopyLink] = React.useState(false);

  const route = useRoute<RouteProp<propsNavigationStack, "Event">>();
  const Id = route.params.id;

  React.useEffect(() => {
    Api.get<Ievent[]>("/events", {
      params: { id: `eq.${Id}` },
    })
      .then(({ data }) => {
        setEventData(data[0]);
        setLoaded(true);
      })
      .catch((response) => console.log(response));
  }, []);

  React.useEffect(() => {
    if (eventData) {
      const EventDate = new Date(eventData.dataInicio);
      setDates({
        day: EventDate.getDate(),
        month: monthNames[EventDate.getMonth()],
        hour: `${EventDate.getHours()}:${EventDate.getMinutes()}0`,
      });
    }
  }, [eventData]);

  const Toast = useToast();
  const handleCopy = () => {
    if (eventData) {
      setCopyLink(true);
      Clipboard.setString(eventData.link);
      Toast.show({
        description: "Link copiado!",
        duration: 2500,
      });
      const timer = setTimeout(() => {
        setCopyLink(false);
        clearTimeout(timer);
      }, 2000);
    }
  };

  return (
    <Container>
      <HeadView>
        <Skeleton.Text w="30%" lines={2} startColor="#FF5100" isLoaded={loaded}>
          <HeadDates>
            <DateTime>
              {dates.day}/{dates.month}
            </DateTime>
            <DateHour>{dates.hour}</DateHour>
          </HeadDates>
        </Skeleton.Text>

        <BackView onPress={() => Navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="#c6c6c6" />
          <BackText>Voltar</BackText>
        </BackView>
      </HeadView>

      <Skeleton h="12" rounded="20" w="90%" my="5" isLoaded={loaded}>
        <Title>{eventData && eventData.titulo}</Title>
      </Skeleton>

      <Skeleton.Text lines={3} w="90%" my="10" isLoaded={loaded}>
        <Description>{eventData && eventData.descricao}</Description>
      </Skeleton.Text>

      <Skeleton.Text
        lines={1}
        w="60%"
        px="5%"
        alignSelf="flex-start"
        isLoaded={loaded}
      >
        <Info>
          Organizado por :{" "}
          <InfoBold>{eventData && eventData.organizador}</InfoBold>
        </Info>
      </Skeleton.Text>

      <LinkHead>Link do evento</LinkHead>

      <LinkView>
        <Skeleton.Text lines={1} w="70%" isLoaded={loaded}>
          <LinkText>{eventData ? eventData.link : null}</LinkText>
        </Skeleton.Text>
        <LinkBtn onPress={() => handleCopy()}>
          <Icon name={copyLink ? "check" : "copy"} size={20} color="#04D361" />
        </LinkBtn>
      </LinkView>
    </Container>
  );
};
