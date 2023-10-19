import { StatusBar, Text, View, Image } from "react-native";
import {
  AdobeIcon,
  SpotifyIcon,
  AddIcon,
  ProfileIcon,
  NetflixIcon,
} from "../../components/SVG/Icon";
import add from "../../assets/Images/add.png";
import copy from "../../assets/Images/copy.png";
import profile from "../../assets/Images/profile.png";
import * as S from "./homeStyle";
import viewController from "./homeController"

const Home = () => {
  const {passwords} = viewController()
  console.log(passwords)
  return (
    <S.HomeContainer>
      <S.Header>
       <Image source={profile} />
        <S.Title>Passwords</S.Title>
     <Image source={add} />
     
      </S.Header>
      
      <S.Category>
     
      <S.CategoryTitle>
      Priority
      </S.CategoryTitle>
      
      {
        passwords?.map((pass) => {
        return (
          
            <S.Item key={pass.id}>
         {pass.icon}
         <S.Info>
           <S.ItemTitle>{pass.title}</S.ItemTitle>
           <S.ItemEmail>{pass.email}</S.ItemEmail>
         </S.Info>
         
          <Image source={copy} />
        </S.Item>
        
          )
        })
      }
      
      
      </S.Category>
      <S.Category>
     
      <S.CategoryTitle>
      Entertaiment
      </S.CategoryTitle>
      
      {
        passwords?.map((pass) => {
        return (
          
            <S.Item key={pass.id}>
         {pass.icon}
         <S.Info>
           <S.ItemTitle>{pass.title}</S.ItemTitle>
           <S.ItemEmail>{pass.email}</S.ItemEmail>
         </S.Info>
         
          <Image source={copy} />
        </S.Item>
        
          )
        })
      }
      
      
      </S.Category>
    </S.HomeContainer>
  );
};

export default Home;
