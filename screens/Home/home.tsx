import {
  StatusBar,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  SectionList,
} from "react-native";

import { Ionicons, Octicons, AntDesign } from "@expo/vector-icons";
import * as S from "./homeStyle";
import viewController from "./homeController";

const Home = () => {
  const { passwords, passwordsList } = viewController();
  console.log(passwords);
  return (
    <S.HomeContainer>
      <S.Header>
        <AntDesign name="user" size={32} color="black" />
        <S.Title>Passwords</S.Title>
        <Ionicons name="add" size={32} color="black" />
      </S.Header>

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={passwordsList}
        renderItem={({ item }) => (
          <S.Category>
            <S.CategoryTitle>{item.sectionTitle}</S.CategoryTitle>
            {item.child.map((pass) => (
              <S.Item>
                {pass.icon}
                <S.Info>
                  <S.Title>{pass.title}</S.Title>
                  <S.Title>{pass.email}</S.Title>
                </S.Info>
                <Ionicons name="copy-outline" size={24} color="black" />
              </S.Item>
            ))}
          </S.Category>
        )}
      />
    </S.HomeContainer>
  );
};

export default Home;
