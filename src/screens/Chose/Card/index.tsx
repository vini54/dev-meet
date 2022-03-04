import React from "react";
import { Container, Info, InfoBold, Title } from "./styles";
import theme from "../../../theme/theme";

import Icon from "../../../assets/LAPTOP.svg";

export const Card = () => {
  return (
    <Container
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? "rgba(255, 255, 255, 0.8)"
            : theme.colors.primaryWhite,
        },
      ]}
    >
      <Icon width={36} height={36} />
      <Title>Servidores Linux</Title>
      <Info>
        <InfoBold>5 eventos</InfoBold> encontrados
      </Info>
    </Container>
  );
};
