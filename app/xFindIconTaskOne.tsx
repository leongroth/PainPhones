import React from 'react'
import { View, Text } from "react-native";
import Headline from '@/components/reusable/Headline'
import Description from '@/components/reusable/Description';
import PainButton from '@/components/reusable/PainButton';


//Side 1 af FIND_ICON

export default function xFindIconTaskOne() {

  const images=[
    'assets\Icons\amazon.png', 
    'assets\Icons\Candy-Crush.jpg',
    'assets\Icons\chatgpt.jpg',
    'assets\Icons\ClashOfClans.jpg',
    'assets\Icons\docs.png',
    'assets\Icons\dropbox.svg',
    'assets\Icons\facebook.webp', 
    'assets\Icons\fruit-ninja.jpg',
    'assets\Icons\Instagram_logo.webp',
    'assets\Icons\linkedIn.webp',
    'assets\Icons\messenger.png',
    'assets\Icons\Netflix.jpg',
    'assets\Icons\office365.png',
    'assets\Icons\onenote.png',
    'assets\Icons\pokemon-go.png',
    'assets\Icons\reddit.png',
    'assets\Icons\Snapchat.png',
    'assets\Icons\soundcloud.jpg',
    'assets\Icons\spotify.png',
    'assets\Icons\strava.png',
    'assets\Icons\Subway_surfers.jpg',
    'assets\Icons\whatsapp.jpg',
    'assets\Icons\Wish-emblem.png',
    'assets\Icons\youtube.jpg'
  ]
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
