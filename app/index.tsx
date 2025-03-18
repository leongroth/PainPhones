import React from "react";
import { View, Text, Alert } from "react-native";
import Description from "../components/reusable/Description";
import Headline from "../components/reusable/Headline";
import PainButton from "../components/reusable/PainButton";
import PainButtonTwo from "../components/reusable/PainButtonTwo";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const downloadCSV = async () => {
  const fileUri = FileSystem.documentDirectory + "participant_data.csv";
  await Sharing.shareAsync(fileUri);
};

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <PainButton href="/IndexTest" text="Test" />
      <PainButton href="/FrontPageTrial" text="Trial" />
    </View>
  );
}