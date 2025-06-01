import { Stack } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <SafeScreen>
      <Stack
        screenOptions={{ headerShown: false }}
      >
        {typeof Stack === "string" ? <Text>{Stack}</Text> : null}
      </Stack>
    </SafeScreen>
  );
}
