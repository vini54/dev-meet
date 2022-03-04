import { ScrollView } from "react-native";
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

import Programing from "../../assets/PROGRAMING.svg";
import Laptop from "../../assets/LAPTOP.svg";
import Integration from "../../assets/INTEGRATION.svg";
import Blocks from "../../assets/BLOCKS_CODE.svg";
import Terminal from "../../assets/TERMINAL.svg";
import Bezier from "../../assets/BEZIER_CURVE.svg";
import Mobile from "../../assets/MOBILE.svg";

import ProgramingWhite from "../../assets/PROGRAMING-white.svg";
import LaptopWhite from "../../assets/LAPTOP-white.svg";
import IntegrationWhite from "../../assets/INTEGRATION-white.svg";
import BlocksWhite from "../../assets/BLOCKS_CODE-white.svg";
import TerminalWhite from "../../assets/TERMINAL-white.svg";
import BezierWhite from "../../assets/BEZIER_CURVE-white.svg";
import MobileWhite from "../../assets/MOBILE-white.svg";

export const Chose = () => {
  const Navigation = useNavigation<propsStack>();

  const [selected, setSelected] = React.useState(false);
  const [cardSelected, setCardSelected] = React.useState(0);

  const handleSelect = (value: number) => {
    if (cardSelected === value) {
      setSelected(false);
      setCardSelected(0);
    } else {
      setSelected(true);
      setCardSelected(value);
    }
  };

  return (
    <Container>
      <Title>Que tipo de evento você procura?</Title>

      <Paragraph>Selecione a categoria que mais te agrada!</Paragraph>

      <ScrollView
        showsVerticalScrollIndicator={false}
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
        <Card
          id={1}
          selected={cardSelected === 1 ? true : false}
          handleSelect={handleSelect}
          titulo="Serverless"
          Icon={cardSelected === 1 ? ProgramingWhite : Programing}
        />
        <Card
          id={2}
          selected={cardSelected === 2 ? true : false}
          handleSelect={handleSelect}
          titulo="Desenvolvimento front-end"
          Icon={cardSelected === 2 ? LaptopWhite : Laptop}
        />
        <Card
          id={3}
          selected={cardSelected === 3 ? true : false}
          handleSelect={handleSelect}
          titulo="Git e DevOps"
          Icon={cardSelected === 3 ? IntegrationWhite : Integration}
        />
        <Card
          id={4}
          selected={cardSelected === 4 ? true : false}
          handleSelect={handleSelect}
          titulo="Agile e gestão de projetos"
          Icon={cardSelected === 4 ? BlocksWhite : Blocks}
        />
        <Card
          id={5}
          selected={cardSelected === 5 ? true : false}
          handleSelect={handleSelect}
          titulo="Construindo interfaces"
          Icon={cardSelected === 5 ? LaptopWhite : Laptop}
        />
        <Card
          id={6}
          selected={cardSelected === 6 ? true : false}
          handleSelect={handleSelect}
          titulo="Servidores Linux"
          Icon={cardSelected === 6 ? TerminalWhite : Terminal}
        />
        <Card
          id={7}
          selected={cardSelected === 7 ? true : false}
          handleSelect={handleSelect}
          titulo="Design de Interfaces"
          Icon={cardSelected === 7 ? BezierWhite : Bezier}
        />
        <Card
          id={8}
          selected={cardSelected === 8 ? true : false}
          handleSelect={handleSelect}
          titulo="Desenvolvimento Mobile"
          Icon={cardSelected === 8 ? MobileWhite : Mobile}
        />
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
