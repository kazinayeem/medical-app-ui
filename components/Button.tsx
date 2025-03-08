import { Colors } from "@/constants/Colors"; // Import Colors if you're using custom ones
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function AuthButton({ title }: { title: string }) {
  return (
    <TouchableOpacity
      className={`w-5/6 h-10 bg-[${Colors.light.background}] rounded-3xl items-center justify-center`} // NativeWind classes
    >
      <Text className="font-semibold text-white text-xl">{title}</Text>
    </TouchableOpacity>
  );
}
