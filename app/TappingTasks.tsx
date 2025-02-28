import Target from "../components/reusable/Target"
import { useLayoutEffect, useState, useRef } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import * as FileSystem from 'expo-file-system'
import PainButton from "../components/reusable/PainButton"
import PainButtonTwo from "../components/reusable/PainButtonTwo"

const TappingTasks = () => {

  // Time functionality
  const startDate = new Date()
  const startTime = `${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()}.${startDate.getMilliseconds()}`
  const [pressTime, setPressTime] = useState([startTime])
  const [timeTaken, setTimeTaken] = useState([])
  const [date, setDate] = useState([startDate])

  const [data, setData] = useState([])


  // Antal gange der skal trykkes
  const goalNumberOfPresses = 10
  const [numberOfPresses, setNumberOfPresses] = useState(0)


  // Random number
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

    const newNumberofPresses = numberOfPresses + 1
    setNumberOfPresses(newNumberofPresses)
    console.log(newNumberofPresses)
    

    if(numberOfPresses === goalNumberOfPresses){
      console.log("done")
    }

    // New random number
    const number = Math.floor(Math.random() * 24)
    setRandomNumber(number)

    // Log time
    const newDate = new Date()
    setPressTime((pressTime) => [...pressTime, `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}.${newDate.getMilliseconds()}`])

    const pressedTime = (newDate.getHours() * 3600000) + (newDate.getMinutes() * 60000) + (newDate.getSeconds() * 1000) + newDate.getMilliseconds()
    const previousTime = (date[date.length - 1].getHours() * 3600000) + (date[date.length - 1].getMinutes() * 60000) + (date[date.length - 1].getSeconds() * 1000) + date[date.length - 1].getMilliseconds()
    const timeSpent = pressedTime - previousTime


    // Debugging
    console.log(`Press time ${pressedTime}`)
    console.log(`Start time ${previousTime}`)
    console.log(timeSpent)

    setTimeTaken((timeTaken) => [...timeTaken, timeSpent])
    setDate((date) => [...date, newDate])

    // Log coordinates
    const touchCoordinates = `x = ${event.clientX}, y = ${event.clientY}`
    const xInput = event.clientX
    const yInput = event.clientY
    targetRef.current?.measure((x, y, width, height, pageX, pageY) => {
      const targetCoordinates = `TargetX = ${pageX + (width / 2)} TargetY = ${pageY + (height / 2)}`
      const ErrorDistance = `X: ${(pageX + (width / 2)) - xInput} Y: ${(pageY + (height / 2)) - yInput}`
      console.log(`${touchCoordinates} ---> ${targetCoordinates} ==== Distance from target: X: ${ErrorDistance}`)
      let hit = ""
      if(((pageX + (width / 2)) - xInput) < 68 && ((pageY + (height / 2)) - yInput) < 68){
        hit = "Hit"
      } else {
        hit = "Miss"
      }
      setData((data) => [...data, {
        time: `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}.${newDate.getMilliseconds()}`, 
        timespent: timeSpent, 
        touchX: xInput, 
        touchY: yInput, 
        targetX: (pageX + (width / 2)), 
        tagetY: (pageY + (height / 2)), 
        distance: ErrorDistance, 
        hit: hit,
        targetID: numberOfPresses
      }])
    }
    )
    console.log(data)
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

    

    if(numberOfPresses < goalNumberOfPresses){
      return (
        <TouchableOpacity style={{ height: "100%", width: "100%"}} onPress={handlePress}>
          <View style={styles.grid}>
            {
                boxes.map((item) => {
                  if(item === randomNumber){
                    return (
                      <View style={styles.box} key={item} ref={targetRef}> <Target/> </View>
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
    } else {
      return (
        <View style={styles.end}>
          <PainButtonTwo onPress={LogTime} text={"Log"} />
          <PainButton href={"/TappingDone"} text={"Continue"} />
          
        </View>
      )
    }
  
  
}

export default TappingTasks
