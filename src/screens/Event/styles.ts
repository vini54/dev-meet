import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral90};
  padding: 20px 0;
`;

export const HeadView = styled.View`
  margin: 20px 0 10px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const HeadDates = styled.View`
  display: flex;
`;

export const DateTime = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.rajdhaniBold};
  color: ${({ theme }) => theme.colors.primaryOrange};
`;
export const DateHour = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.rajdhaniMedium};
  color: ${({ theme }) => theme.colors.primaryOrange};
`;
export const BackView = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BackText = styled.Text`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.primaryGray};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.epilogueMedium};
`;

export const Title = styled.Text`
  margin: 10px 0;
  width: 90%;
  font-size: 28px;
  line-height: 40px;
  font-family: ${({ theme }) => theme.fonts.epilogueExtrabold};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const Description = styled.Text`
  margin: 10px 0;
  width: 90%;
  font-size: 12px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.epilogueRegular};
  color: ${({ theme }) => theme.colors.neutral40};
`;

export const Info = styled.Text`
  margin: 10px 0;
  width: 90%;
  text-align: left;
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.epilogueMedium};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const InfoBold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.epilogueBold};
`;

export const LinkHead = styled.Text`
  margin: 40px 0 10px;
  width: 90%;
  text-align: center;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.epilogueExtrabold};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const LinkView = styled.View`
  margin: 10px 0;
  width: 90%;
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #323232;
  border-radius: 10px;
`;

export const LinkText = styled.Text`
  text-align: left;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.rajdhaniMedium};
  color: ${({ theme }) => theme.colors.neutral30};
`;

export const LinkBtn = styled.Pressable`
  background-color: rgba(4, 211, 97, 0.2);
  padding: 10px;
  border-radius: 10px;
`;
