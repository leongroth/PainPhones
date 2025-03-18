import React, { useState, useEffect, useRef } from "react";
import { LogBox, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Target from "../components/reusable/Target";
import * as FileSystem from 'expo-file-system';


LogBox.ignoreAllLogs();

const date = new Date();

const TappingTasks = () => {

  // Time

  const MiliTime = date.getHours()*3600000 + date.getMinutes()*60000 + date.getSeconds()*1000 + date.getMilliseconds();

  // Timer
  const [time, setTime] = useState(0);
  const navigation = useNavigation();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const touchableRef = useRef(null);

  const [timeStamps, setTimeStamp] = useState([MiliTime])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime >= 90) {
          clearInterval(interval);
          navigation.navigate("TappingDone"); 
          return prevTime;
        }
        return prevTime + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigation]);

  // Random number
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 24));

  const rowHeight = 100 / 6;
  const styles = {
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      height: "100%",
    },
    box: {
      width: "25%",
      height: `${rowHeight}%`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    end: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };



  const boxes = [
    {id: 0, center:  {x:(dimensions.width)/8, y: Math.round(dimensions.height/12)}},
    {id: 1, center:  {x:((dimensions.width)*3)/8, y: Math.round(dimensions.height/12)}},
    {id: 2, center:  {x:((dimensions.width)*5)/8, y: Math.round(dimensions.height/12)}},
    {id: 3, center:  {x:((dimensions.width)*7)/8, y: Math.round(dimensions.height/12)}},
    {id: 4, center:  {x:(dimensions.width)/8, y: Math.round((dimensions.height/12)*3)}},
    {id: 5, center:  {x:((dimensions.width)*3)/8, y: Math.round((dimensions.height/12)*3)}},
    {id: 6, center:  {x:((dimensions.width)*5)/8, y: Math.round((dimensions.height/12)*3)}},
    {id: 7, center:  {x:((dimensions.width)*7)/8, y: Math.round((dimensions.height/12)*3)}},
    {id: 8, center:  {x:(dimensions.width)/8, y: Math.round((dimensions.height/12)*5)}},
    {id: 9, center:  {x:((dimensions.width)*3)/8, y: Math.round((dimensions.height/12)*5)}},
    {id: 10, center: {x:((dimensions.width)*5)/8, y: Math.round((dimensions.height/12)*5)}},
    {id: 11, center: {x:((dimensions.width)*7)/8, y: Math.round((dimensions.height/12)*5)}},
    {id: 12, center: {x:(dimensions.width)/8, y: Math.round((dimensions.height/12)*7)}},
    {id: 13, center: {x:((dimensions.width)*3)/8, y: Math.round((dimensions.height/12)*7)}},
    {id: 14, center: {x:((dimensions.width)*5)/8, y: Math.round((dimensions.height/12)*7)}},
    {id: 15, center: {x:((dimensions.width)*7)/8, y: Math.round((dimensions.height/12)*7)}},
    {id: 16, center: {x:(dimensions.width)/8, y: Math.round((dimensions.height/12)*9)}},
    {id: 17, center: {x:((dimensions.width)*3)/8, y: Math.round((dimensions.height/12)*9)}},
    {id: 18, center: {x:((dimensions.width)*5)/8, y: Math.round((dimensions.height/12)*9)}},
    {id: 19, center: {x:((dimensions.width)*7)/8, y: Math.round((dimensions.height/12)*9)}},
    {id: 20, center: {x:(dimensions.width)/8, y: Math.round((dimensions.height/12)*11)}},
    {id: 21, center: {x:((dimensions.width)*3)/8, y: Math.round((dimensions.height/12)*11)}},
    {id: 22, center: {x:((dimensions.width)*5)/8, y: Math.round((dimensions.height/12)*11)}},
    {id: 23, center: {x:((dimensions.width)*7)/8, y: Math.round((dimensions.height/12)*11)}},
  ];


  const handlePress = async (event) => {

    const newTime = new Date()
    const newMiliTime = newTime.getHours()*3600000 + newTime.getMinutes()*60000 + newTime.getSeconds()*1000 + newTime.getMilliseconds();

    const elapsedTime = newMiliTime - timeStamps[timeStamps.length - 1]
    console.log(elapsedTime)

    setTimeStamp([...timeStamps, newMiliTime])

    // Measure the position of the TouchableOpacity component


    let input = ""
    let targetCenter = ""
    let hit = ""

    touchableRef.current.measure(() => {
      input = `x=${Math.round(event.nativeEvent.pageX*3)} y=${Math.round(event.nativeEvent.pageY*3)}`; ;
      targetCenter =`TargetX=${boxes[randomNumber].center.x} TargetY=${boxes[randomNumber].center.y}`

      const inputX = Math.round(event.nativeEvent.pageX*3);
      const inputY = Math.round(event.nativeEvent.pageY*3);
      const targetX = boxes[randomNumber].center.x;
      const targetY = boxes[randomNumber].center.y;
      
      if (inputX - targetX < 135 && inputX - targetX > -135 && inputY - targetY < 135 && inputY - targetY > -135) {
        hit = "Hit"
      } else {
        hit = "Miss"
      }

      

//      console.log(`X=${Math.round(inputX * 3)}`, `Y=${Math.round(inputY * 3)}`);
//      console.log(`TargetX=${boxes[randomNumber].center.x}`, `TargetY=${boxes[randomNumber].center.y}`);
    });

    const TaskCsvData = [
    ["ElapsedTime", "Input", "TargetCenter", "Succes"],
    [elapsedTime, input, targetCenter, hit]]
    .map((row) => row.join(","))
    .join("\n")

    const fileUri = FileSystem.documentDirectory + "participant_data.csv";

    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    let existingData = ""
    if (fileInfo.exists) {
      existingData = await FileSystem.readAsStringAsync(fileUri)
    }

    const updatedCsvData = existingData ? `${existingData}\n${TaskCsvData}` : TaskCsvData
    
    await FileSystem.writeAsStringAsync(fileUri, updatedCsvData, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    // New random number
    const number = Math.floor(Math.random() * 24);
    setRandomNumber(number);
  };


  return (
    <TouchableOpacity
      style={{ height: "100%", width: "100%" }}
      onPress={handlePress}
      ref={touchableRef}
      onLayout={({ nativeEvent }) => {
        setDimensions({ width: Math.round((nativeEvent.layout.width)*3), height: Math.round((nativeEvent.layout.height)*3) })
      }
    }
    >
      <View style={styles.grid}>
        {boxes.map((item) => {
          if (item.id === randomNumber) {
            return (
              <View
                style={styles.box}
                key={item.id}
              >
                <Target />
              </View>
            );
          } else {
            return <View style={styles.box} key={item.id}></View>;
          }
        })}
      </View>
    </TouchableOpacity>
  );
};

export default TappingTasks;