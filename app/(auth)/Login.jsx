import AuthButton from "@/components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useHeaderHeight } from "@react-navigation/elements";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const headerHeight = useHeaderHeight();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View
      className="flex-1 flex justify-between bg-white px-6"
      style={{ marginTop: headerHeight }}
    >
      {/* Input Fields */}
      <View className="mt-10 space-y-4 flex flex-col gap-5">
        <View className="flex flex-row items-center border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] px-4 py-1">
          <AntDesign name="mail" size={20} color="#E5E7EB" className="mr-2" />
          <TextInput
            className="flex-1 text-base"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            returnKeyType="next"
          />
        </View>

        <View className="flex flex-row items-center border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] px-4 py-1">
          <AntDesign name="lock" size={20} color="#E5E7EB" className="mr-2" />
          <TextInput
            className="flex-1 text-base"
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
            textContentType="password"
            returnKeyType="done"
          />

          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <AntDesign
              name={passwordVisible ? "eye" : "eyeo"}
              size={20}
              color="#E5E7EB"
            />
          </TouchableOpacity>
        </View>
        {/* forgot passowrd */}
        <View className="flex mt-2">
          <TouchableOpacity className="flex flex-row items-center justify-end">
            <Text className="text-green-500">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <View className="mt-6">
          <AuthButton
            color="white"
            title="Login"
            className="bg-black py-3 rounded-xl"
            icon={<AntDesign name="arrowright" size={24} color="white" />}
          />
        </View>
      </View>
      {/* do u haave an account */}
      <View className="flex mt-2">
        <TouchableOpacity className="flex flex-row items-center justify-center">
          <Text className="text-gray-500">Don't have an account?</Text>
          <Text className="text-green-500 ml-1">Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* -----------or--------- */}
      <View className="flex flex-row items-center justify-center mt-4">
        <View className="flex-1 border border-gray-300 h-[1px]" />
        <Text className="mx-2 text-xl text-gray-500">or</Text>
        <View className="flex-1 border border-gray-300 h-[1px]" />
      </View>

      {/* Social Login Buttons */}
      <View className="mt-8 space-y-3">
        <AuthButton
          backgroundColor="white"
          color="black"
          borderColor="gray-300"
          className="border py-3 rounded-xl"
          icon={<AntDesign name="google" size={24} color="black" />}
          title="Login with Google"
        />
        <AuthButton
          backgroundColor="white"
          color="black"
          borderColor="gray-300"
          className="border py-3 rounded-xl"
          icon={<AntDesign name="apple1" size={24} color="black" />}
          title="Login with Apple"
        />
        <AuthButton
          backgroundColor="white"
          color="black"
          borderColor="gray-300"
          className="border py-3 rounded-xl"
          icon={<AntDesign name="facebook-square" size={24} color="black" />}
          title="Login with Facebook"
        />
      </View>
    </View>
  );
}
