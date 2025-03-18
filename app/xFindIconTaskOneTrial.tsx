import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import Headline from '../components/reusable/Headline';
import Description from '../components/reusable/Description';
import PainButton from '../components/reusable/PainButton';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { icons } from '../assets/Icons';
import PainButtonTwo from '../components/reusable/PainButtonTwo';

// Side 1 af FIND_ICON

export default function xFindIconTaskOneTrial() {
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);

  const generate = () => {
    const newIndex = Math.floor(Math.random() * 24) + 1;
    setIndex(newIndex);
    setActive(true);
    return newIndex; 
  };

  const images = [
    { icons: "", id: 0, title: "" },
    { icon: icons.candyCrush, id: 1, title: "Candy Crush" },
    { icon: icons.chatgpt, id: 2, title: "ChatGPT" },
    { icon: icons.clashOfClans, id: 3, title: "Clash of Clans" },
    { icon: icons.docs, id: 4, title: "Docs" },
    { icon: icons.dropbox, id: 5, title: "Dropbox" },
    { icon: icons.facebook, id: 6, title: "Facebook" },
    { icon: icons.fruitNinja, id: 7, title: "Fruit Ninja" },
    { icon: icons.instagram, id: 8, title: "Instagram" },
    { icon: icons.linkedIn, id: 9, title: "LinkedIn" },
    { icon: icons.messenger, id: 10, title: "Messenger" },
    { icon: icons.netflix, id: 11, title: "Netflix" },
    { icon: icons.office365, id: 12, title: "Office 365" },
    { icon: icons.onenote, id: 13, title: "OneNote" },
    { icon: icons.pokemonGo, id: 14, title: "Pokemon Go" },
    { icon: icons.reddit, id: 15, title: "Reddit" },
    { icon: icons.snapchat, id: 16, title: "Snapchat" },
    { icon: icons.soundcloud, id: 17, title: "Soundcloud" },
    { icon: icons.spotify, id: 18, title: "Spotify" },
    { icon: icons.strava, id: 19, title: "Strava" },
    { icon: icons.subwaySurfers, id: 20, title: "Subway Surfers" },
    { icon: icons.whatsapp, id: 21, title: "WhatsApp" },
    { icon: icons.Temu, id: 22, title: "Temu" },
    { icon: icons.youtube, id: 23, title: "Youtube" },
    { icon: icons.amazon, id: 24, title: "Amazon" }
  ];

  const GenerateIcon = () => {
    generate();
  };

  return (
    <View
      style={{
        flex: 1, alignItems: 'center',
      }}
    >
      <Headline text={"Find Icon"} />
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
        <Image source={images[index].icon} style={{ width: 100, height: 100 }} />
      </View>

      <Description text={images[index].title} />
      <PainButton href={"/xFindIconTaskTwo"} text={"continue"} />
      <PainButtonTwo text={"Generate new image"} onPress={GenerateIcon} active={active} />
    </View>
  );
}