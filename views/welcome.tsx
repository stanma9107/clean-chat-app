import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#FFCB45]">
      {/* Background */}
      <View className="absolute -left-1/2 top-0 flex flex-col gap-y-6 -rotate-[30deg]">
        {Array.from({ length: 15 }).map((_, parentIndex) => (
          <View
            className="flex flex-row gap-x-4 opacity-10"
            key={parentIndex}
          >
            {Array.from({ length: 7 }).map((_, index) => (
              <Text
                key={index}
                className="font-krona-one text-black text-3xl"
              >
                Blip!
              </Text>
            ))}
          </View>
        ))}
      </View>
      {/* Content */}
      <View
        style={{
          marginTop: safeAreaInsets.top,
          marginLeft: safeAreaInsets.left,
          marginRight: safeAreaInsets.right,
        }}
        className="flex-1 flex flex-col"
      >
        <View className="flex-1 items-center justify-end">
          <Image
            source={require("../assets/welcome.png")}
            resizeMode="cover"
            resizeMethod="scale"
          />
        </View>
        <View className="flex-1 bg-black flex flex-col justify-center space-y-8 px-10">
          <Text className="text-white font-inter-bold text-4xl leading-loose">
            Stay connected with your friends and family
          </Text>
          <View className="flex flex-row items-center justify-start gap-x-4">
            <Image source={require("../assets/icons/sheild.png")} />
            <Text className="text-white font-inter-semi-bold text-base">
              Secure, private messaging
            </Text>
          </View>
          <TouchableOpacity className="bg-white w-full py-6 flex flex-row items-center justify-center rounded-full">
            <Text className="font-inter-bold text-black text-base">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
