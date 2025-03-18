import React from "react";
import { View, Text, Alert } from "react-native";
import PainButton from "../components/reusable/PainButton";

export default function FrontPageTrial() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <PainButton href={"/TappingDescriptionTrial"} text={"TappingTask"} />
      <PainButton href={"/xFindIconDescriptionTrial"} text={"FindIcon"} />
      <PainButton href={"/yTextEntryDescriptionTrial"} text={"TextEntry"} />
    </View>
  );
}

