import React from "react";
import Main from "./components/Main";
import FullInfo from "./components/FullInfo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={
            {
              title: "Главная",
              headerStyle: {
                backgroundColor: '#eb5d3d',
                height: 100
              },
              headerTitleStyle: {
                fontWeight: 'light'
              }
            }
          }
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{ title: "Статья" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
