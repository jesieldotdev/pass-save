import styled from "styled-components/native";

export const HomeContainer = styled.View`
  /*background-color: red; */
  /*display: flex;*/
  /*flex-direction: row;*/
  width: 100%;

  flex: 1;
  margin: 0;
  padding: 16px;
  justify-content: center ;
  margin: auto;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  /*width: 100%;*/
  /*background-color: #f4f4f4; */
  margin: 0;
  margin-top: 20px;
  justify-content: space-between;
  padding-bottom: 8px;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  /*border-radius: 16px;*/
  /*box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);*/
  /*backdrop-filter: blur(5px);*/
  /*-webkit-backdrop-filter: blur(5px);*/
  /*border: 1px solid rgba(255, 255, 255, 0.3);*/
`;

export const Title = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 400;
`;

export const Category = styled.View`
  width: 100%;
  margin-top: 32px;
`;
export const CategoryTitle = styled.Text`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 24px;
`;
export const Item = styled.View`
  display: flex;
  flex-direction: row;
  /* background-color: #f4f4f4 ; */
  justify-content: space-between;
  margin: 0;
  /*margin-top: 16px;*/
  padding: 8px;
  vertical-align: middle;
`;

export const Info = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
`;

export const ItemTitle = styled.Text`
  color: #292d32;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
`;
export const ItemEmail = styled.Text`
  color: #292d32;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
`;

export const Button = styled.Pressable``;

export const Icon = styled.Pressable`
  display: flex;
  vertical-align: middle ;
`;
