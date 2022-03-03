import React from "react";
import { Api } from "../../services/Api";
import ArrowRight from "../../assets/Arrow-White.svg";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Models";
import {
  Container,
  Heading,
  HeadingOrange,
  NextBtn,
  Paragraph,
  ParagraphOrange,
  PersonImg,
} from "./styles";

const Person = "../../assets/person.png";

export const Greeting = () => {
  const Navigation = useNavigation<propsStack>();

  /* const hanldePost = () => {
    Api.get("/events", { params: { tipoId: "eq.1" } })
      .then(({ data }) => console.log(data))
      .catch((response) => console.log(response));
  }; */

  return (
    <Container>
      <Heading>
        Olá, Dev <HeadingOrange>!</HeadingOrange>
      </Heading>

      <Paragraph>
        Encontre o seu <ParagraphOrange>próximo</ParagraphOrange> evento de
        programação!
      </Paragraph>

      <PersonImg source={require(Person)} resizeMode="contain" />

      <NextBtn onPress={() => Navigation.navigate("Available")}>
        <ArrowRight width={48} height={48} />
      </NextBtn>
    </Container>
  );
};
