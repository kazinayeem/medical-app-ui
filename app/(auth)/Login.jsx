import AuthButton from "@/components/Button";
import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function Login() {
  const d = useHeaderHeight();

  return (
    <View
      className="flex-1 bg-white"
      style={{
        marginTop: d,
      }}
    >
      {/* border with button */}
      <View className="flex flex-col ">
        {/* two text input email and passowrd and login button */}
        <TextInput
          className="border-2 border-gray-400 rounded-lg p-2 m-2"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          returnKeyType="next"
        />

        <TextInput
          className="border-2 border-gray-400 rounded-lg p-2 m-2"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          returnKeyType="done"
        />
        <AuthButton
          color="white"
          title="Login"
          icon={<AntDesign name="arrowright" size={24} color="white" />}
        />
      </View>

      <View className="flex justify-end flex-col items-center  mt-4">
        <AuthButton
          backgroundColor="white"
          color="black"
          borderColor="#0000"
          icon={<AntDesign name="google" size={24} color="black" />}
          title="Login with google"
          iconPosition="left"
        />
        <AuthButton
          backgroundColor="white"
          color="black"
          borderColor="#0000"
          title="Login with FaceBook"
          icon={<AntDesign name="apple1" size={24} color="black" />}
        />
        <AuthButton
          backgroundColor="white"
          color="black"
          borderColor="#0000"
          title="Login with FaceBook"
          icon={<AntDesign name="facebook-square" size={24} color="black" />}
        />
      </View>
    </View>
  );
}
