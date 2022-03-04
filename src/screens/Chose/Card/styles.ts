import styled from "styled-components/native";

type cardProps = {
  selected: boolean;
};
export const Container = styled.Pressable<cardProps>`
  height: 180px;
  margin-top: 4%;
  width: 48%;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primaryOrange : theme.colors.primaryWhite};
`;

export const Title = styled.Text<cardProps>`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primaryWhite : theme.colors.neutral90};
  font-family: ${({ theme }) => theme.fonts.epilogueMedium};
`;

export const Info = styled.Text<cardProps>`
  font-size: 10px;
  line-height: 14px;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primaryWhite : theme.colors.neutral30};
  font-family: ${({ theme }) => theme.fonts.epilogueRegular};
`;

export const InfoBold = styled.Text<cardProps>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primaryWhite : theme.colors.primaryOrange};
  font-family: ${({ theme }) => theme.fonts.epilogueSemibold};
`;
