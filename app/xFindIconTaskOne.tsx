import React from 'react'
import { View, Text } from "react-native";
import Headline from '@/components/reusable/Headline'
import Description from '@/components/reusable/Description';
import PainButton from '@/components/reusable/PainButton';

//Side 1 af FIND_ICON

export default function xFindIconTaskOne() {
  return (
    <View
    style={{
        flex: 1, alignItems: 'center', 
    }}
  >
      <Headline text={"Find Icon"}/>
    <Text style={{ fontSize: 20 }}>Find the icon on the display</Text>
    <View
    style={{
      backgroundColor: '#FEFEFE',
      justifyContent: "center",
      width: 200,
      height: 200,
      borderRadius: 10,
      marginTop: 20,
      marginBottom: 10,
      alignItems: 'center', 
      
    }}
    >
    <Description text={"Icon"}/>

    </View>

    <Description text={"Icon name"}/>
    <PainButton href={"/xFindIconTaskTwo"} text={"continue"}/>
    
  </View>
  )
}
