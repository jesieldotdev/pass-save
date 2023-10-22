import { Dimensions, FlatList, ImageBackground } from "react-native";

import { Ionicons, Octicons, AntDesign } from "@expo/vector-icons";
import * as S from "./analysisStyle";
import viewController from "./analysisController";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const Analyses = () => {
  const { passwords, passwordsList, vibrate, Vibration } = viewController();
  console.log(passwords);

  const chartConfig = {
    backgroundGradientFrom: "#2C3E50",
    // backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#4CA1AF",
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional,
    
  };

  const data = {
    labels: ["Swim", ], // optional
    data: [0.6, ]
  };
  return (
    <S.HomeContainer>
      <S.Header>
        <AntDesign name="user" size={32} color="black" />
        <S.Title>Analysis</S.Title>
        <Ionicons name="add" size={32} color="black" />
      </S.Header>

      
        <S.CategoryTitle>ProgressChart</S.CategoryTitle>
        <ProgressChart
  data={data}
  width={Dimensions.get("window").width - 30}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>


        <S.CategoryTitle>Bezier Line Chart</S.CategoryTitle>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 30} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      

      {/* <FlatList
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
      /> */}
    </S.HomeContainer>
  );
};

export default Analyses;
