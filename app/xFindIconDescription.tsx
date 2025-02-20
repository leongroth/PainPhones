import React from 'react'
import { View, Text } from "react-native";
import Headline from '@/components/reusable/Headline'
import PainButton from '@/components/reusable/PainButton'
import { xFindIconTask1 } from './xFindIconTask1';

//Startside af FIND_ICON 

export const xFindIconDescription = () => {
  return (
    <View
    style={{
        flex: 1, alignItems: 'center', 
    }}
  >
      <Headline text={"Find Icon"}/>
    <Text style={{ fontSize: 20 }}>A icon is shown to you and you have to find it with other icons in the mix </Text>
    <PainButton href={'/xFindIconTask1'} text={"continue"}/>
  </View>
  )
}

export default xFindIconDescription
