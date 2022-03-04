import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral90};
  padding: 20px 0;
`;

export const Title = styled.Text`
  width: 90%;
  margin: 10px 0;
  text-align: left;
  font-size: 32px;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-family: ${({ theme }) => theme.fonts.epilogueBold};
`;

export const Paragraph = styled.Text`
  width: 90%;
  margin: 20px 0;
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.primaryGray};
  font-family: ${({ theme }) => theme.fonts.epilogueRegular};
`;

export const NextView = styled.View`
  width: 90%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const NextText = styled.Text`
  margin-right: 10px;
  text-align: right;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-family: ${({ theme }) => theme.fonts.epilogueSemibold};
`;

export const NextBtn = styled.Pressable`
  padding: 5px;
  border-radius: 10px;
`;
