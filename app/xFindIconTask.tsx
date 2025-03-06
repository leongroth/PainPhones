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
import arrayShuffle from 'array-shuffle';
import 



const xFindIconTask = () => {

  const [index, setIndex] = useState(Math.floor(Math.random() * 24));
  const [pageState, setPageState] = useState("Memory");

  // Timer funktion
const timeLimit = 5
const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime >= timeLimit) {
            clearInterval(interval)
            setPageState("Done");
            return prevTime
        }
        return prevTime + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])


  const imageArray = [
    { icon: icons.amazon, id: 0, title: "Amazon" },
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
  ];

  const [images, setImages] = useState(arrayShuffle(imageArray));
  const [iconID, setIconID] = useState(images[index].id);



const rowHeight = 100 / 6
const style= {
    pageStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

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
        height: "100%",
        backgroundColor: "#D9D9D9"
    },
    boxStyle: {
        width: "25%",
        height: `${rowHeight}%`, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    imageIconStyle: {
        width: 65,
        height: 65,
        borderRadius: 15,
    },
    iconTextStyle: {
        textAlign: "center",
    },
    iconContainerStyle: {
        //backgroundColor: "red",
        flex: 1,
        alignItems: "center",
        paddingTop: 10
    }
}


const correctPress = () => {
    console.log("Correct");
    const newIndex = Math.floor(Math.random() * 24);
    setPageState("Memory");
    setIndex(newIndex);
    const shuffledImages = arrayShuffle(imageArray);
    setImages(shuffledImages);
    setIconID(shuffledImages[newIndex].id);
}
const wrongPress = () => {
    console.log("Wrong");
}

if (pageState === "Memory") {
    return (
      <View style= {style.pageStyle}>
        <Headline text={"Find Icon"} />
        <Description text={"Find the icon on the display"} />

        <View style={style.iconStyle}>
            <Image source={images[index].icon} style={style.imageStyle} />
        </View>
        <Description text={images[index].title} />
      <PainButtonTwo text={"continue" } onPress={() => {
            setPageState("Task");
      }} />
      </View>
      
    )
}
if(pageState === "Task"){ {
    return (
        <View style={style.gridStyle}>
            {images.map((image) => {
                if(image.id === iconID){
                    return (
                        <View style={style.boxStyle} key={image.id}>
                            <TouchableOpacity onPress={correctPress}>
                                <View style={style.iconContainerStyle}>
                                    <Image source={image.icon} style={style.imageIconStyle} />
                                    <Text style={style.iconTextStyle}> {image.title} </Text>
                                </View>
                                
                            </TouchableOpacity>
                        </View>
                    )
                } else {
                    return (
                        <View style={style.boxStyle} key={image.id}>
                            <TouchableOpacity onPress={wrongPress}>
                                <View style={style.iconContainerStyle}>
                                    <Image source={image.icon} style={style.imageIconStyle} />
                                    <Text style={style.iconTextStyle}> {image.title} </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
            })}
        </View>
    )
}
}

if(pageState === "Done") {
    return (
        <View
            style={style.pageStyle}
        >
            <Headline text={"2/3"}/>
            <Headline text={"Done"}/>
            <PainButtonTwo onPress={} text={"Log"} />
        </View>
      )

export default xFindIconTask
