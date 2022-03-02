import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral90};
`;

export const Heading = styled.Text`
  width: 80%;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-family: ${({ theme }) => theme.fonts.epilogueBold};
  text-align: left;
`;

export const HeadingOrange = styled.Text`
  color: ${({ theme }) => theme.colors.primaryOrange};
`;

export const Paragraph = styled.Text`
  margin: 20px 0;
  width: 80%;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryGray};
  line-height: 38px;
`;

export const ParagraphOrange = styled.Text`
  color: ${({ theme }) => theme.colors.primaryWhite};
  background-color: ${({ theme }) => theme.colors.primaryOrange};
`;

export const PersonImg = styled.Image`
  width: 70%;
`;

export const NextBtn = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  padding: 10px;
  border-radius: 15px;
`;
