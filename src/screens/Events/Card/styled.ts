import styled from "styled-components/native";

export const Container = styled.View`
  margin: 20px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 10px;
  padding: 20px;
`;

export const DateView = styled.View`
  display: flex;
  flex-direction: row;
`;
export const DateText = styled.Text`
  color: ${({ theme }) => theme.colors.neutral90};
  font-size: 16px;
`;
export const DateBold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.rajdhaniBold};
  color: ${({ theme }) => theme.colors.primaryOrange};
`;
export const DateReg = styled.Text`
  font-family: ${({ theme }) => theme.fonts.rajdhaniMedium};
  color: ${({ theme }) => theme.colors.primaryOrange};
`;

export const Title = styled.Text`
  margin: 10px 0;
  font-family: ${({ theme }) => theme.fonts.epilogueExtrabold};
  color: ${({ theme }) => theme.colors.neutral90};
  font-size: 20px;
  line-height: 24px;
`;

export const ContentText = styled.Text`
  margin: 10px 0;
  font-family: ${({ theme }) => theme.fonts.epilogueRegular};
  color: ${({ theme }) => theme.colors.neutral40};
  font-size: 10px;
  line-height: 14px;
`;

export const BottomView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoView = styled.View`
  display: flex;
  align-items: flex-start;
`;

export const InfoText = styled.Text`
  margin: 10px 0;
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.epilogueMedium};
  color: ${({ theme }) => theme.colors.neutral90};
`;
export const InfoBold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.epilogueBold};
`;

export const EnterBtn = styled.Pressable`
  border-radius: 8px;
  padding: 5px;
`;
