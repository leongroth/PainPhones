import Target from "../components/reusable/Target"
import { useLayoutEffect, useState, useRef } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import * as FileSystem from 'expo-file-system'

const TappingTasks = () => {

  // Time functionality
  const startDate = new Date()
  const startTime = `${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()}.${startDate.getMilliseconds()}`
  const [pressTime, setPressTime] = useState([startTime])
  const [timeTaken, setTimeTaken] = useState([])
  const [date, setDate] = useState([startDate])


  // Antal gange der skal trykkes
  const goalNumberOfPresses = 10

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



  const boxes = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
  ]

  const handlePress = (event) => {


    // New random number
    const number = Math.floor(Math.random() * 24)
    setRandomNumber(number)

    // Log coordinates
    const touchCoordinates = `x = ${event.clientX}, y = ${event.clientY}`
    const xInput = event.clientX
    const yInput = event.clientY
    targetRef.current?.measure((x, y, width, height, pageX, pageY) => {
      const targetCoordinates = `TargetX = ${pageX + (width / 2)} TargetY = ${pageY + (height / 2)}`
      const ErrorDistance = `${(pageX + (width / 2)) - xInput} Y: ${(pageY + (height / 2)) - yInput}`
      console.log(`${touchCoordinates} ---> ${targetCoordinates} ==== Distance from target: X: ${ErrorDistance}`)
    }
    )

    // Log time
    const newDate = new Date()
    setPressTime((pressTime) => [...pressTime, `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}.${newDate.getMilliseconds()}`])

    const pressTime = (newDate.getHours() * 3600000) + (newDate.getMinutes() * 60000) + (newDate.getSeconds() * 1000) + newDate.getMilliseconds()
    const startTime = (date[date.length - 1].getHours() * 3600000) + (date[date.length - 1].getMinutes() * 60000) + (date[date.length - 1].getSeconds() * 1000) + date[date.length - 1].getMilliseconds()
    const timeSpent = pressTime - startTime


    // Debugging
    console.log(`Press time ${pressTime}`)
    console.log(`Start time ${startTime}`)
    console.log(timeSpent)

    setTimeTaken((timeTaken) => [...timeTaken, timeSpent])
    setDate((date) => [...date, newDate])
  }

  const LogTime = async () => {  
    const logEntry = {  
        PressTime: pressTime,  
        StartTime: startTime,
        TimeSpent: timeTaken,
    };  

    const timeCsvData = [  
        ["PressTime", "StartTime", "TimeSpent"],
        [logEntry.PressTime, logEntry.StartTime, logEntry.TimeSpent]  
    ]  
    .map(row => row.join(","))  
    .join("\n");  

    const fileUri = FileSystem.documentDirectory + "participant_data.csv";  

    // Tjekker filen eksisterer og læser dataen  
    const fileInfo = await FileSystem.getInfoAsync(fileUri);  
    let existingData = "";  
    if (fileInfo.exists) {  
        existingData = await FileSystem.readAsStringAsync(fileUri);  
    } 

    // Tilføjer det nye data til den eksisterende CSV-fil  
    const updatedCsvData = existingData ? `${existingData}\n${timeCsvData}` : timeCsvData;  

    await FileSystem.writeAsStringAsync(fileUri, updatedCsvData, {  
        encoding: FileSystem.EncodingType.UTF8,  
      });  
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
