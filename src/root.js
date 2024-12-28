import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigation";

const Root = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Root;
