import Description from "@/components/reusable/Description";
import Headline from "@/components/reusable/Headline";
import PainButton from "@/components/reusable/PainButton";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Headline text={"Hejsa"}/>
      <Description text={"holaholaholaholaholahola"}/>
      <PainButton href={"/ParticipantInfo"} text={"Part-Info"} />
      <PainButton href={"/TappingDescription"} text={"TappingTask"} />
    </View>
  );
}
