import React from "react";
import { Container, Info, InfoBold, Title } from "./styles";
import { SvgProps } from "react-native-svg";
import { Api } from "../../../services/Api";
import { Ievent } from "../../../interfaces";

type CardProps = {
  titulo: string;
  Icon: React.FC<SvgProps>;
  id: number;
  handleSelect: (value: number) => void;
  selected: boolean;
  disable?: boolean;
};

export const Card = (props: CardProps) => {
  const { titulo, Icon, id, handleSelect, selected, disable } = props;

  const [eventsNumber, setEventsNumber] = React.useState(0);

  React.useEffect(() => {
    Api.get<Ievent[]>("/events", { params: { tipoId: `eq.${id}` } })
      .then(({ data }) => setEventsNumber(data.length))
      .catch((response) => console.log(response));
  }, []);

  return (
    <Container
      selected={selected}
      onPress={() => handleSelect(id)}
      disable={disable}
      style={({ pressed }) => [
        {
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
    >
      <Icon width={36} height={36} />

      <Title selected={selected}>{titulo}</Title>

      <Info selected={selected}>
        <InfoBold selected={selected}>{eventsNumber} eventos</InfoBold>{" "}
        encontrados
      </Info>
    </Container>
  );
};
