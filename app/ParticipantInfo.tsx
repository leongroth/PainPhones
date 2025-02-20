import { View, Text } from "react-native";
import Headline from "@/components/reusable/Headline";


export default function TestScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Headline text={"Enter your information"}/>
      <Text style={{ fontSize: 20 }}>Welcome to the Test Page!</Text>
    </View>
  );
}


