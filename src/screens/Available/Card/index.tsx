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
import theme from "../../../theme/theme";

import { Ievent } from "../../../interfaces";

type CardProps = {
  data: Ievent;
};

export const Card = (props: CardProps) => {
  const { data } = props;

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

  const [dates, setDates] = React.useState({
    month: "",
    day: 0,
  });

  React.useEffect(() => {
    const IniDate = new Date(data.dataInicio);
    setDates({
      month: `${monthNames[IniDate.getMonth()]}`,
      day: IniDate.getDate(),
    });
  }, []);

  const Navigation = useNavigation<propsStack>();
  return (
    <Container
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? "rgba(255, 255, 255, 0.8)"
            : theme.colors.primaryWhite,
        },
      ]}
      onPress={() => Navigation.navigate("Event")}
    >
      <DateView>
        <DateText>
          <DateBold>{`${dates.day}/${dates.month}`}</DateBold> -
          <DateReg> 19:00</DateReg>
        </DateText>
      </DateView>

      <Title>{data.titulo}</Title>

      <ContentText numberOfLines={3}>{data.descricao}</ContentText>

      <BottomView>
        <InfoView>
          <InfoText>
            Organizado por : <InfoBold>{data.organizador}</InfoBold>
          </InfoText>
        </InfoView>
        <EnterBtn>
          <Icon name="arrow-right" size={24} color="#FF5100" />
        </EnterBtn>
      </BottomView>
    </Container>
  );
};
