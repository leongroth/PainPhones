import { useState } from "react"
import Description from "../components/reusable/Description"
import Headline from "../components/reusable/Headline"
import PainButton from "../components/reusable/PainButton"
import PainButtonTwo from "../components/reusable/PainButtonTwo"
import Target from "../components/reusable/Target"
import { Button, View } from "react-native"




const TappingDescription = () => {

  const startDate = new Date()
  const [date, setDate] = useState([startDate])
  const [time, setTime] = useState([`${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()}.${startDate.getMilliseconds()}`])

  const [timeTaken, setTimeTaken] = useState<Number>()
  const getTime = () => {
    const newDate = new Date()
    setDate((date) => [...date, newDate])
    const newTime = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}.${newDate.getMilliseconds()}`
    setTime((time) => [...time, newTime])
    
    const pressTime = (newDate.getHours() * 3600000) + (newDate.getMinutes() * 60000) + (newDate.getSeconds() * 1000) + newDate.getMilliseconds()
    const startTime = (date[date.length - 1].getHours() * 3600000) + (date[date.length - 1].getMinutes() * 60000) + (date[date.length - 1].getSeconds() * 1000) + date[date.length - 1].getMilliseconds()
    const timeSpent = pressTime - startTime
    setTimeTaken(timeSpent)
    console.log(date.length)
    console.log(`Press time ${pressTime}`)
    console.log(`Start time ${startTime}`)
    console.log(timeSpent)
  }

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
