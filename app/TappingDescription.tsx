import { useState } from "react"
import Description from "../components/reusable/Description"
import Headline from "../components/reusable/Headline"
import PainButton from "../components/reusable/PainButton"
import PainButtonTwo from "../components/reusable/PainButtonTwo"
import Target from "../components/reusable/Target"
import { Button, View } from "react-native"

const date = new Date()
// `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
const [time, setTime] = useState([])


const getTime = () => {
  const newDate = new Date()
  const newTime = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}.${newDate.getMilliseconds()}`
  setTime((time) => [...time, newTime])
}

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
        <PainButton href={"/TappingTasks"} text={"Continue"} />
        <PainButtonTwo text={"Get time"} onPress={getTime}/>
    </View>
  )
}

export default TappingDescription
