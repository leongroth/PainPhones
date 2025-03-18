import React from 'react'
import { View, Text } from "react-native";
import Headline from '../components/reusable/Headline'
import PainButton from '../components/reusable/PainButton'

export default function yTextEntryDescription() {
  return (
    <View
    style={{
        flex: 1, alignItems: 'center', 
    }}
  >
      <Headline text={"Text-Entry"}/>
    <Text style={{ fontSize: 20 }}>A text is shown to you and you have to replicate the text and submit it.  </Text>
    <PainButton href={"/yTextEntryTask"} text={"continue"}/>
  </View>
  )
}
