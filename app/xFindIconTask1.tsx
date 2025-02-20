import React from 'react'
import { View, Text } from "react-native";
import Headline from '@/components/reusable/Headline'

//Side 1 af FIND_ICON

export const xFindIconTask1 = () => {
  return (
    <View
    style={{
        flex: 1, alignItems: 'center', 
    }}
  >
      <Headline text={"Task 1"}/>
    <Text style={{ fontSize: 20 }}>kk</Text>
  </View>
  )
}
