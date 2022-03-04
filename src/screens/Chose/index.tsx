import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import {
  Container,
  NextBtn,
  NextText,
  NextView,
  Paragraph,
  Title,
} from "./styles";
import { Card } from "./Card";
import ArrowIcon from "../../assets/Arrow-White.svg";
import theme from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Models";

export const Chose = () => {
  const Navigation = useNavigation<propsStack>();
  const [selected, setSelected] = React.useState(true);

  return (
    <Container>
      <Title>Que tipo de evento você procura?</Title>

      <Paragraph>Selecione a categoria que mais te agrada!</Paragraph>

      <ScrollView
        contentContainerStyle={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
        style={{
          width: "90%",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>

      <NextView>
        {selected && (
          <>
            <NextText>Próximo</NextText>
            <NextBtn
              onPress={() => Navigation.navigate("Available")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? "rgba(4, 211, 97, .8)"
                    : theme.colors.semanticGreen,
                },
              ]}
            >
              <ArrowIcon width={28} height={28} />
            </NextBtn>
          </>
        )}
      </NextView>
    </Container>
  );
};
