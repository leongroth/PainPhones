import React from 'react'
import { View } from 'react-native'
import Headline from '../components/reusable/Headline'
import PainButton from '../components/reusable/PainButton'
import PainButtonTwo from '../components/reusable/PainButtonTwo'
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const downloadCSV = async () => {
  const fileUri = FileSystem.documentDirectory + "participant_data.csv";
  await Sharing.shareAsync(fileUri);
};

const IndexTest = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <PainButton href={"/ParticipantInfo"} text={"Part-Info"} />
      <PainButton href={"/TappingDescription"} text={"TappingTask"} />
      <PainButton href={"/xFindIconDescription"} text={"FindIcon"} />
      <PainButton href={"/yTextEntryDescription"} text={"TextEntry"} />
      <PainButtonTwo onPress={downloadCSV} text="CSVFile" />
    </View>
  )
}

export default IndexTest
