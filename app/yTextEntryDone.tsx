import React from 'react'
import { View, Text } from "react-native";
import Headline from '@/components/reusable/Headline'
import PainButton from '@/components/reusable/PainButton'


export default function yTextEntryDone() {
  return (
    <View
        style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Headline text={"3/3"}/>
        <Headline text={"Done"}/>
        <PainButton href={"/"} text={"Continue"} />
    </View>
  )
}
