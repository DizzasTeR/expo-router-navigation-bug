import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
  function replaceRoute() {
    router.replace("/(tabs)/");
  }

  function goBack() {
    router.back();
  }

  return (
    <View style={{ gap: 12 }}>
      <Text style={{ color: "white" }}>Edit index</Text>
      <Button onPress={replaceRoute} title="Replace (Doesn't work)" />
      <Button onPress={goBack} title="Go back (Works)" />
    </View>
  );
}
