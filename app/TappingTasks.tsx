import Target from "@/components/reusable/Target"
import { useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"

const TappingTasks = () => {
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
    }
  }

  const boxes = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
  ]

  const handlePress = () => {
    const number = Math.floor(Math.random() * 24)
    setRandomNumber(number)
  }

  return (
    <TouchableOpacity style={{ height: "100%", width: "100%"}} onPress={handlePress}>
      <View style={styles.grid}>
        {boxes.map((item) => {
          if(item === randomNumber){
            return (
              <View style={styles.box}> <Target/> </View>
            )
          } else {
            return (
              <View style={styles.box}></View>
            )
          }
        })}
      </View>
    </TouchableOpacity>
  )
  
}

export default TappingTasks
