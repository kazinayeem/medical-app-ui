import AuthButton from "@/components/Button";
import React from "react";
import { Text, View } from "react-native";

export default function LastScreen() {
  return (
    <View>
      <Text>LastScreen</Text>
      <AuthButton title="Login" />
      <AuthButton title="Login" />
    </View>
  );
}
