import Target from "../components/reusable/Target"
import { useState, useEffect, useRef } from "react"
import { LogBox, TouchableOpacity, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"


LogBox.ignoreAllLogs()

const TappingTasks = () => {
const [targetCoordinates, setTargetCoordinates] = useState({x: 0, y: 0})




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