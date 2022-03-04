import styled from "styled-components/native";

export const Container = styled.Pressable`
  height: 180px;
  margin-top: 4%;
  width: 48%;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.Text`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.neutral90};
  font-family: ${({ theme }) => theme.fonts.epilogueMedium};
`;

export const Info = styled.Text`
  font-size: 10px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.neutral30};
  font-family: ${({ theme }) => theme.fonts.epilogueRegular};
`;

export const InfoBold = styled.Text`
  color: ${({ theme }) => theme.colors.primaryOrange};
  font-family: ${({ theme }) => theme.fonts.epilogueSemibold};
`;
