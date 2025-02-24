import Target from "@/components/reusable/Target"
import { useLayoutEffect, useState, useRef } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"

const TappingTasks = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 24))
 
  const targetRef = useRef(null)

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

  useLayoutEffect(() => {
    targetRef.current?.measure((x, y, width, height, pageX, pageY) => {
      console.log(`x = ${x}, y = ${y}, width = ${width}, height = ${height}, pageX = ${pageX}, pageY = ${pageY}`)
    }
    )
  }, [
    targetRef
  ])

  const boxes = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
  ]

  const handlePress = (event) => {
    const number = Math.floor(Math.random() * 24)
    setRandomNumber(number)
    console.log(`x = ${event.clientX}, y = ${event.clientY}`)
  }



  return (
    <TouchableOpacity style={{ height: "100%", width: "100%"}} onPress={handlePress}>
      <View style={styles.grid}>
        {boxes.map((item) => {
          if(item === randomNumber){
            return (
              <View style={styles.box} key={item} ref={targetRef}> <Target/> </View>
            )
          } else {
            return (
              <View style={styles.box} key={item}></View>
            )
          }
        })}
      </View>
    </TouchableOpacity>
  )
  
}

export default TappingTasks
