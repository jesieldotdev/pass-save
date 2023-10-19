import { StatusBar, Text, View } from "react-native";
import {
  AdobeIcon,
  SpotifyIcon,
  AddIcon,
  ProfileIcon,
  NetflixIcon,
} from "../../components/SVG/Icon";
import * as S from "./homeStyle";

const Home = () => {
  return (
    <S.HomeContainer>
      <S.Header>
        <ProfileIcon
          style={{
            backgroundColor: "red",
       

          }}
          width={64}
          height={64}
        />
        <S.Title>Passwords</S.Title>
        <AddIcon
        style={{
            backgroundColor: '#ffefef'
        }}
         width={64} height={64} />
      </S.Header>
    </S.HomeContainer>
  );
};

export default Home;
