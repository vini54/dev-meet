import React from "react";
import ArrowRight from "../../assets/Arrow-White.svg";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Models";
import theme from "../../theme/theme";
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

      <NextBtn
        onPress={() => Navigation.navigate("Chose")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? "rgba(255, 81, 0, .6)"
              : theme.colors.primaryOrange,
          },
        ]}
      >
        <ArrowRight width={48} height={48} />
      </NextBtn>
    </Container>
  );
};
