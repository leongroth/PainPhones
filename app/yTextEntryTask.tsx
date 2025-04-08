import React, { useRef, useState, useEffect } from "react";
import { TextInput, View, Text, Alert } from "react-native";
import PainButtonTwo from "../components/reusable/PainButtonTwo";
import * as FileSystem from 'expo-file-system';
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";



// Levenshtein distance algorithm
const levenshteinDistance = (a, b) => {
  const an = a ? a.length : 0
  const bn = b ? b.length : 0
  if (an === 0) return bn
  if (bn === 0) return an
  const matrix = Array(an + 1)
    .fill(null)
    .map(() => Array(bn + 1).fill(null))
  for (let i = 0; i <= an; i += 1) {
    matrix[i][0] = i
  }
  for (let j = 0; j <= bn; j += 1) {
    matrix[0][j] = j
  }
  for (let i = 1; i <= an; i += 1) {
    for (let j = 1; j <= bn; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }
  return matrix[an][bn];
};


const TextEntry = () => {
  const timeStampStart = new Date()
  const timeStampMilli = timeStampStart.getHours()*3600000+timeStampStart.getMinutes()*60000+timeStampStart.getSeconds()*1000+timeStampStart.getMilliseconds()
  const [timeStampArray, setTimeStampArray] = useState([timeStampMilli])
  const timeLimit = 90
  const [time, setTime] = useState(0)
  const navigation = useNavigation()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime >= timeLimit) {
          clearInterval(interval)
          navigation.navigate('yTextEntryDone') // Replace 'NextPage' with the name of your next screen
          return prevTime
        }
        return prevTime + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [navigation])

  const [isFocused, setIsFocused] = useState(false)
  const [height, setHeight] = useState(50)
  const textInputRef = useRef(null)

  const easyText = [
    {id: "E1", text:"It is wet because of the weather."},
    {id: "E2", text:"A dog runs in the yard with us."},
    {id: "E3", text:"The sun is hot in the bluest sky."},
    {id: "E4", text:"A bird sitting on the oldest fence."},
    {id: "E5", text: "There is a insect on my small hand."},
    {id: "E6", text: "The kid is playing in the cold snow."},
    {id: "E7", text: "I want to do a lot of shopping."},
    {id: "E8", text: "The pupil is bigger in the night."},
    {id: "E9", text: "The cat is fat and very happy."},
    {id: "E10", text: "The dog runs slower and eats tacos."},
  ];

  const hardText = [
    { id: "H1", text: "Unshaken, he defies the storm." },
    { id: "H2", text: "She vanished into twilight mist." },
    { id: "H3", text: "He vanishes in moonlit haze." },
    { id: "H4", text: "Times cruelty leaves us cold." },
    { id: "H5", text: "The night whispers ancient secrets. " },
    { id: "H6", text: "His laughter echoed in silence." },
    { id: "H7", text: "Love withers beneath the morning sun." },
    { id: "H8", text: "Betrayal cuts deeper than swords." },
    { id: "H9", text: "Catastrophes touch is not like this." },
    { id: "H10", text: "The fire slowly dies within." },
  ];

  const [order, setOrder] = useState(easyText);
  const [text, setText] = useState(order[Math.floor(Math.random() * easyText.length)])
  const [isEasyText, setIsEasyText] = useState(true)
  const [input, setInput] = useState("")
  const [mistakes, setMistakes] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [usedSentences, setUsedSentences] = useState([])
  const [diff, setDiff] = useState("easy")

  const submit = async () => {
    const trimmedInput = input.trim()
    const trimmedText = text.text.trim()
    const mistakeCount = levenshteinDistance(trimmedInput, trimmedText)
    setMistakes(mistakeCount)
    const newTimeStamp = new Date()
    const minTimeStamp= (newTimeStamp.getHours()*3600000)+(newTimeStamp.getMinutes()*60000)+(newTimeStamp.getSeconds()*1000)+newTimeStamp.getMilliseconds()
    const elapsedTime = minTimeStamp-timeStampArray[timeStampArray.length-1]
    setTimeStampArray([...timeStampArray, minTimeStamp])
    const isCorrect = trimmedInput === trimmedText
    const result = isCorrect ? "Correct" : "Incorrect"
    setUsedSentences([...usedSentences, text])

    const id = text.id
    const logEntry = { mistakeCount, result, elapsedTime, charCount, id}

    const csvData = [
      ["Mistakes", "Result", "ElapsedTime", "characterInputs", "TextID"],
      [logEntry.mistakeCount, logEntry.result, logEntry.elapsedTime, logEntry.charCount, logEntry.id]
    ]
      .map(row => row.join(","))
      .join("\n");

    const fileUri = FileSystem.documentDirectory + "participant_data.csv";

    // Check if the file exists and read the data from the file
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    let existingData = ""
    if (fileInfo.exists) {
      existingData = await FileSystem.readAsStringAsync(fileUri)
    }

    // Append the new data to the existing data in the CSV file
    const updatedCsvData = existingData ? `${existingData}\n${csvData}` : csvData

    await FileSystem.writeAsStringAsync(fileUri, updatedCsvData, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    let newText;
    if (isEasyText) {
      setDiff("hard")
      setOrder(hardText);
      do {
        newText = hardText[Math.floor(Math.random() * hardText.length)];
      } while (usedSentences.includes(newText));
      setText(newText);
    } else {
      setDiff("easy")
      setOrder(easyText);
      do {
        newText = easyText[Math.floor(Math.random() * easyText.length)];
      } while (usedSentences.includes(newText));
      setText(newText);
    }

    setIsEasyText(!isEasyText)
    textInputRef.current.clear()
    setInput("")
    //Alert.alert(result)
  };



  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>{text.text} </Text>
      <Input
        ref={textInputRef}
        style={{
          marginTop: 100,
          height: height,
          minHeight: 100,
          borderWidth: 2,
          borderColor: isFocused ? "#007AFF" : "#ccc",
          borderRadius: 8,
          paddingHorizontal: 10,
          backgroundColor: isFocused ? "#E6F0FF" : "white",
        }}
        placeholder="Type here..."
        multiline
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={ (event)=> {
          setInput(event.nativeEvent.text)
          setCharCount(charCount+1)
        }
      }

      />
      <View style={{ alignItems: 'center'}}>
        <PainButtonTwo onPress={submit} text={"Submit"} />
      </View>
    </View>
  );
};

export default TextEntry