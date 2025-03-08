import { Stack } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
  // chnage first screen to be the first screen of the onboarding flow
  useEffect(() => {}, []);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
        animation: "fade_from_bottom",
      }}
    >
      {/* Onboarding page */}
      <Stack.Screen name="Slider" options={{ headerShown: false }} />
      <Stack.Screen name="LastScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
