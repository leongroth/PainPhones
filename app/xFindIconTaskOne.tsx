import React, { useState } from 'react'
import { View, Text } from "react-native";
import Headline from '@/components/reusable/Headline'
import Description from '@/components/reusable/Description';
import PainButton from '@/components/reusable/PainButton';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { icons } from '@/assets/Icons';




//Side 1 af FIND_ICON

export default function xFindIconTaskOne() {

  const images = [
    icons.amazon,
    icons.candyCrush,
    icons.chatgpt,
    icons.clashOfClans,
    icons.docs,
    icons.dropbox,
    icons.facebook,
    icons.fruitNinja,
    icons.instagram,
    icons.linkedIn,
    icons.messenger,
    icons.netflix,
    icons.office365,
    icons.onenote,
    icons.pokemonGo,
    icons.reddit,
    icons.snapchat,
    icons.soundcloud,
    icons.spotify,
    icons.strava,
    icons.subwaySurfers,
    icons.whatsapp,
    icons.wishEmblem,
    icons.youtube,
  ]

    const [imageSrc, setImageSrc]= useState(images[0]);

    const generateRandomImage = () => {
      const randIndex = 
        Math.floor(Math.random() * images.length)
        setImageSrc(images[randIndex])
    }
  

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
    <Image source={imageSrc} style={{ width: 100, height: 100 }} /> 
    
    </View>
    <TouchableOpacity onPress={generateRandomImage} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Generate Icon</Text>
      </TouchableOpacity>
    <Description text={"Icon name"}/>
    <PainButton href={"/xFindIconTaskTwo"} text={"continue"}/>
    
  </View>
  )
}

