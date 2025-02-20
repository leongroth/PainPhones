import React from 'react'
import { View, Text } from "react-native";
import Headline from '@/components/reusable/Headline'

//side 2 af FIND_ICON

export const xFindIconTask2 = () => {
  return (
    <View
    style={{
        flex: 1, alignItems: 'center', 
    }}
  >
      <Headline text={"Task 2"}/>
    <Text style={{ fontSize: 20 }}>task 2</Text>
  </View>
  )
}
