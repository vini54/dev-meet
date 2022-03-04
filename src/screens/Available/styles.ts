import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral90};
`;

export const View1 = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Heading1 = styled.Text`
  width: 90%;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-family: ${({ theme }) => theme.fonts.epilogueBold};
`;

export const BackView = styled.Pressable`
  /* bug */
  margin-left: -30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BackText = styled.Text`
  color: ${({ theme }) => theme.colors.primaryGray};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.epilogueMedium};
`;
export const HeadText = styled.Text`
  margin: 20px 0;
  width: 90%;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.epilogueRegular};
  color: ${({ theme }) => theme.colors.primaryGray};
  line-height: 20px;
`;
