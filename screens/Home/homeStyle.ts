import styled from "styled-components/native";

export const HomeContainer = styled.View`
  /* background-color: red; */
  display: flex;
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #f4f4f4;
  margin-top: 64px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #000;
  /* font-family: Poppins; */
  font-size: 24px;
  font-weight: 400;
`;
