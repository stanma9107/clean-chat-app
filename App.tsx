import { NavigationContainer } from "@react-navigation/native";
import ApplicationStack from "./stacks";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFontLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    KronaOne_400Regular,
  });

  useEffect(() => {
    if (isFontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  if (!isFontLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <ApplicationStack />
    </NavigationContainer>
  );
}
