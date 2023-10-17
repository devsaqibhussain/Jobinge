import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
export default function HomeLayout() {
  const [loadFonts] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (loadFonts) {
      await SplashScreen.hideAsync();
    }
  }, [loadFonts]);

  if (!loadFonts) {
    return null;
  }
  return <Stack onLayout={onLayoutRootView} />;
}
