import React from 'react'
import { View, Text } from "react-native";
import Headline from '@/components/reusable/Headline'
import PainButton from '@/components/reusable/PainButton'

export const xFindIconDescription = () => {
  return (
    <View
    style={{
        flex: 1, alignItems: 'center'
    }}
  >
      <Headline text={"Find Icon"}/>
    <Text style={{ fontSize: 20 }}>A icon is shown to you and you have to find it with other icons in the mix </Text>
  </View>
  )
}

export default xFindIconDescription
