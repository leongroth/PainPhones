import React from 'react'
import { View, Text } from "react-native";
import Headline from '../components/reusable/Headline'
import PainButton from '../components/reusable/PainButton'

//Done page for FIND_ICON

export default function xFindIconDone  ()  {
  return (
    <View
        style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Headline text={"2/3"}/>
        <Headline text={"Done"}/>
        <PainButton href={"/"} text={"Continue"} />
    </View>
  )
}
