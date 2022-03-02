import { ScrollView, Text } from "react-native";
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
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Models";
import { Card } from "./Card";

export const Events = () => {
  const Navigation = useNavigation<propsStack>();

  return (
    <Container>
      <View1>
        <Heading1>Eventos disponíveis</Heading1>

        <BackView onPress={() => Navigation.navigate("Greeting")}>
          <Icon name="arrow-left" size={18} color="#c6c6c6" />
          <BackText>Voltar</BackText>
        </BackView>
      </View1>

      <HeadText>Selecione o evento desejado. E espere sua data!</HeadText>

      <ScrollView style={{ width: "80%", flex: 1, marginVertical: 20 }}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </Container>
  );
};
