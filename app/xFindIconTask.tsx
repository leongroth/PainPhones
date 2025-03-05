import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import Headline from '../components/reusable/Headline';
import Description from '../components/reusable/Description';
import PainButton from '../components/reusable/PainButton';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { icons } from '../assets/Icons';
import PainButtonTwo from '../components/reusable/PainButtonTwo';
import * as FileSystem from 'expo-file-system';


const xFindIconTask = () => {
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [pageState, setPageState] = useState(true);

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

  const rowHeight = 100 / 6
const style= {
    pageStyle: {
        flex: 1,
        allignItems: 'center',
        width: "100%",
        height: "100%",

},
    iconStyle: {
        backgroundColor: '#FEFEFE',
        justifyContent: "center",
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
    },
    imageStyle: {
        width: 100,
        height: 100,
    },
    gridStyle: {
        flexDirection: "row",
        flexWrap: "wrap",
        height: "100%"
    },
    boxStyle: {
        width: "25%", 
        height: `${rowHeight}%`, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
}

const correctPress = () => {
    console.log("Correct");
    setPageState(true);
}
const wrongPress = () => {
    console.log("Wrong");
    setPageState(true);
}

if (pageState) {
    return (
      <View style= {style.pageStyle}>
        <Headline text={"Find Icon"} />
        <Description text={"Find the icon on the display"} />

        <View style={style.iconStyle}>
            <Image source={images[index].icon} style={style.imageStyle} />
        </View>
        <Description text={images[index].title} />
      <PainButtonTwo text={"continue" } onPress={() => {
            setPageState(false);
      }} />
      <PainButtonTwo text={"Generate new image"} onPress={generate} active={active} />

      </View>
      
    )
}
else {
    return (
        <View style={style.gridStyle}>
            {images.map((image) => {
                if(image.id === index){
                    return (
                        <View style={style.boxStyle} key={image.id}>
                            <TouchableOpacity onPress={correctPress}>
                                <Image source={image.icon} />
                            </TouchableOpacity>
                        </View>
                    )
                } else {
                    return (
                        <View style={style.boxStyle} key={image.id}>
                            <TouchableOpacity onPress={wrongPress}>
                                <Image source={image.icon} />
                            </TouchableOpacity>
                        </View>
                    )
                }
            })}
        </View>
    )
}
}

export default xFindIconTask
