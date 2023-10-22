import { FlatList, ImageBackground } from "react-native";

import { Ionicons, Octicons, AntDesign } from "@expo/vector-icons";
import * as S from "./homeStyle";
import viewController from "./homeController";

const Home = () => {
  const { passwords, passwordsList, vibrate, Vibration } = viewController();
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
              <S.Button
                focusable
                onPress={() => Vibration.vibrate()}
                // onPressOut={() => Vibration.cancel()}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#f4f4f4" : "white",
                    transition: "3s",
                  },
                  {
                    borderRadius: 8,
                  },
                ]}
              >
                <S.Item>
                  <S.Icon>{pass.icon}</S.Icon>

                  <S.Info>
                    <S.ItemTitle>{pass.title}</S.ItemTitle>
                    <S.ItemTitle>{pass.email}</S.ItemTitle>
                  </S.Info>
                  <Ionicons
                    style={{
                      display: "flex",
                      verticalAlign: "middle",
                      margin: "auto",
                    }}
                    name="copy-outline"
                    size={32}
                    color="black"
                  />
                </S.Item>
              </S.Button>
            ))}
          </S.Category>
        )}
      />
    </S.HomeContainer>
  );
};

export default Home;
