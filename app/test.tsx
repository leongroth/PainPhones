import { View, Text } from "react-native";

export default function TestScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Welcome to the Test Page!</Text>
    </View>
  );
}


