import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="Login"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Login",
          headerShadowVisible: false,
          headerTransparent: true,
            headerStyle: {
                backgroundColor: "white",
            },
          headerTintColor: "black",
          animation: "fade_from_bottom",
        }}
      />
    </Stack>
  );
}
