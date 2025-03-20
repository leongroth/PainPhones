import React from "react";
import { View, Text, Alert } from "react-native";
import Description from "../components/reusable/Description";
import Headline from "../components/reusable/Headline";
import PainButton from "../components/reusable/PainButton";
import PainButtonTwo from "../components/reusable/PainButtonTwo";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { TouchableOpacity } from "react-native";
import { Link


 } from "expo-router";
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
      <Link href={"/FrontPageTrial"} style={{
        justifyContent:"center",
        padding:20,
        backgroundColor:"blue",
        width:100,
        borderRadius:5,
        margin:40,
        boxShadow: "1 2 7 grey",
      }}>
        <Text style={{
          fontSize:25,
          color:"white",

        }}>Trial</Text>
      </Link>
    </View>
  );
}