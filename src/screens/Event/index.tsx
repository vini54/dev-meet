import { useNavigation } from "@react-navigation/native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { propsStack } from "../../Models";
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
  const Navigation = useNavigation<propsStack>();
  return (
    <Container>
      <HeadView>
        <HeadDates>
          <DateTime>02/MAR</DateTime>
          <DateHour>19:00</DateHour>
        </HeadDates>

        <BackView onPress={() => Navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="#c6c6c6" />
          <BackText>Voltar</BackText>
        </BackView>
      </HeadView>

      <Title>Criando interfaces muito malucas com o Figma!</Title>

      <Description>
        Você pode criar interfaces malucas que dispertam sua criativade. Usando
        de recursos do próprio figma, como seus plugins.
      </Description>

      <Info>
        Organizado por : <InfoBold>Comunidade Ballerini</InfoBold>
      </Info>

      <LinkHead>Link do evento</LinkHead>

      <LinkView>
        <LinkText>meet.google/12345</LinkText>
        <LinkBtn>
          <Icon name="arrow-right" size={20} color="#04D361" />
        </LinkBtn>
      </LinkView>
    </Container>
  );
};
