import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from "@expo/vector-icons"
import Analyses from './screens/Analyzis/analysis';

const Tab = createBottomTabNavigator();

function MyTabs() {
  // const {theme, setTheme} = useContext(MyContext)

  const header = {
    backgroundColor:  "#f4f4f4",
    marginTop: 0
  }
  const headerTitle = {
    color: "#363636",
  }
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'orders') {
              iconName = focused ? 'list-outline' : 'list-outline';
            }
           else if (route.name === 'analysis') {
              iconName = focused ? 'heart-outline' : 'heart-outline';
            }
           else if (route.name === 'settings') {
              iconName = focused ? 'cog-outline' : 'cog-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={32} color={color} />;
          },
          // tabBarActiveTintColor: '#000',
          // tabBarInactiveTintColor: '#c4c4c4',
          tabBarStyle: header,
          // freezeOnBlur: true,
          // tabBarActiveBackgroundColor: '#c4c4c4',
          // tabBarItemStyle: styles.tabItem
          tabBarLabelStyle: {
            fontSize: 14,

          },
          tabBarIconStyle: {
            width: 32,
            height: 32
          },
          


          
        })}
    >
      <Tab.Screen name="home" component={Home} options={{
            title: 'Passwords',
            headerShown: false,
            // headerStyle: header,
            // headerTitleStyle: headerTitle

          }} />
     

       
      <Tab.Screen name="analysis" component={Analyses} options={{
            title: 'Analyses',
            headerShown: false

          }} />
      {/* <Tab.Screen name="settings" component={Settings} options={{
            title: 'Configurações',
            headerShown: true,
            headerStyle: header,
            headerTitleStyle: headerTitle

          }} /> */}
      {/* <Tab.Screen name="teste" component={MessageView} options={{
            title: 'Teste',
            headerShown: false

          }} /> */}
    </Tab.Navigator>
  );
}

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
