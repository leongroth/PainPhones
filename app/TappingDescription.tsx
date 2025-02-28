import { useState } from "react"
import Description from "../components/reusable/Description"
import Headline from "../components/reusable/Headline"
import PainButton from "../components/reusable/PainButton"
import PainButtonTwo from "../components/reusable/PainButtonTwo"
import Target from "../components/reusable/Target"
import { Button, TouchableOpacity, View } from "react-native"




const TappingDescription = () => {

  return (
    <View
        style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Headline text={"Tapping-Task"}/>
        <Description text={"A circle appears on the screen and you have to press it as quickly and accurately as possible"} />

        <TouchableOpacity onPress={() => {console.log("pressed")}}>
          <PainButton href={"/TappingTasks"} text={"Continue"} />
        </TouchableOpacity>
        

    </View>
  )
}

export default TappingDescription
