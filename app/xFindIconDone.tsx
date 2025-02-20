import React from 'react'
import { View, Text } from "react-native";
import Headline from '@/components/reusable/Headline'
import PainButton from '@/components/reusable/PainButton'

//Done page for FIND_ICON

export default function xFindIconDone  ()  {
  return (
    <View
    style={{
        flex: 1, alignItems: 'center', 
    }}
  >
      <Headline text={"Done"}/>
    <Text style={{ fontSize: 20 }}>done</Text>
  </View>
  )
}
