import styled from "styled-components/native";

export const HomeContainer = styled.View`
   /*background-color: red; */
  /*display: flex;*/
  /*flex-direction: row;*/
  width: 100%;
  
  flex: 1;
  margin: 0;
  padding: 16px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  /*width: 100%;*/
   /*background-color: #f4f4f4; */
  margin: 0;
  margin-top: 16px;
  justify-content: space-between;
  
  
`;

export const Title = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 300;
`;

export const Category = styled.View`
  margin-top: 8px;
  width: 100%;
  margin-top: 32px;
`
export const CategoryTitle = styled.Text`
  color: #000;
font-size: 20px;
font-style: normal;
font-weight: 400;

`
export const Item = styled.View`
  display: flex;
  flex-direction: row;
  /*background-color: #f4f4f4 ;*/
  justify-content: space-between;
  margin: 0;
  margin-top: 16px;
`

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  /*background-color: #f4f4f4 ; */
  width: max-content;
  margin-left: 0px;
`


export const ItemTitle = styled.Text`
  color: #292D32;
font-size: 20px;
font-style: normal;
font-weight: 400;
text-align: left;

`
export const ItemEmail = styled.Text`
  color: #292D32;
font-size: 20px;
font-style: normal;
font-weight: 400;
text-align: left;

`