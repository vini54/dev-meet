import { useNavigation } from "@react-navigation/native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { propsStack } from "../../../Models";
import {
  BottomView,
  Container,
  ContentText,
  DateBold,
  DateReg,
  DateText,
  DateView,
  EnterBtn,
  InfoBold,
  InfoText,
  InfoView,
  Title,
} from "./styled";

export const Card = () => {
  const Navigation = useNavigation<propsStack>();
  return (
    <Container>
      <DateView>
        <DateText>
          <DateBold>02/MAR</DateBold> - <DateReg>19:00</DateReg>
        </DateText>
      </DateView>

      <Title>Criando interfaces muito malucas com o Figma!</Title>

      <ContentText>
        Você pode criar interfaces malucas que dispertam sua criativade. Usando
        de recursos do próprio figma, como seus plugins.
      </ContentText>

      <BottomView>
        <InfoView>
          <InfoText>
            Organizado por : <InfoBold>Comunidade Ballerini</InfoBold>
          </InfoText>
        </InfoView>
        <EnterBtn onPress={() => Navigation.navigate("Event")}>
          <Icon name="arrow-right" size={24} color="#FF5100" />
        </EnterBtn>
      </BottomView>
    </Container>
  );
};
