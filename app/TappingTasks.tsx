import Target from "../components/reusable/Target"
import { useState, useEffect, useRef } from "react"
import { LogBox, TouchableOpacity, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { PanResponder } from "react-native"

LogBox.ignoreAllLogs()


const TappingTasks = () => {
  //Timer
const [time, setTime] = useState(0)
const navigation = useNavigation()
const [targetCoordinates, setTargetCoordinates] = useState({x: 0, y: 0})

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime >= 30000000000) {
          clearInterval(interval)
          navigation.navigate('TappingDone') // Replace 'NextPage' with the name of your next screen
          return prevTime
        }
        return prevTime + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [navigation])

  // Random number
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 24))
 
  const rowHeight = 100 / 6
  const styles = {
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      height: "100%"
    },
    box: {
      width: "25%", 
      height: `${rowHeight}%`, 
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    end: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }

  const boxes = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
  ]

  const handlePress = (event) => {

    // New random number
    const number = Math.floor(Math.random() * 24)
    setRandomNumber(number)

    const inputX = event.nativeEvent.pageX 
    const inputY = event.nativeEvent.pageY
    console.log(`X=${Math.round (inputX*3)}`, `Y=${Math.round(inputY*3)}`)
    console.log(targetCoordinates)
    }

  
  const targetCoord = useRef(null)
//HELLO
  return (
    <TouchableOpacity style={{ height: "100%", width: "100%"}}  onPress={
      handlePress
    }>
      <View style={styles.grid}>
        {
            boxes.map((item) => {
              if(item === randomNumber){
                return (
                  <View style={styles.box} key={item} ref={targetCoord} onLayout={ ({nativeEvent}) => {
                    const targetX= Math.round((nativeEvent.layout.x + nativeEvent.layout.width/2)*3)
                    const targetY= Math.round((nativeEvent.layout.y + nativeEvent.layout.height/2)*3)
                    setTargetCoordinates({x: targetX, y: targetY})
                    console.log(targetX, targetY)
                  }
                  }> <Target/> </View>
                )
              } else {
                return (
                  <View style={styles.box} key={item}></View>
                )
              }
            })
          }
      </View>
    </TouchableOpacity>
  )
  
  
}

export default TappingTasks