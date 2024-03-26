import {
  Slot,
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { useEffect } from "react";
import { Alert, ScrollView, Text, View } from "react-native";

export default function Layout() {
  const navigation = useNavigation();

  useEffect(() => {
    function handler(e: any) {
      e.preventDefault();
      Alert.alert("Discard changes", "Discard your edits?", [
        {
          onPress: () => {
            navigation.dispatch(e.data.action);
          },
          text: "Discard",
          style: "destructive",
        },
        {
          isPreferred: true,
          text: "Continue editing",
          style: "cancel",
        },
      ]);
    }

    navigation.addListener("beforeRemove", handler);

    return () => navigation.removeListener("beforeRemove", handler);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Slot />
    </View>
  );
}
