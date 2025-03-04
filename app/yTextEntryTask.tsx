import React, { useRef, useState, useEffect } from "react";
import { TextInput, View, Text, Alert } from "react-native";
import PainButtonTwo from "../components/reusable/PainButtonTwo";
import * as FileSystem from 'expo-file-system';
import { useNavigation } from "@react-navigation/native";

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
  const timeLimit = 5
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
    "There is a cat on the big chair.",
    "A dog runs in the yard with us.",
    "The sun is hot in the blue sky.",
    "A bird sits on the old fence.",
    "There is a bug on my small hand.",
    "The kid plays in the cold snow.",
    "A fish swims in the deep pond.",
    "There is a bee in the red rose.",
    "The bell rings in the quiet hall.",
    "A frog jumps in the wet grass.",
  ];

  const hardText = [
    "Let not the winds of fate erase my name. My soul shall in thy heart forever stay.",
    "Though time may steal the youth from out my face, my love within thy gaze shall never pale.",
    "Yet shall the moonlight grace the silent shore, though waves may rise and crash against the stone.",
    "Speak now thy truth ere silence binds thy tongue, for words once lost shall never more be found.",
    "Dost thou still dream when night begins to fall? Or doth the dawn unmake what darkness spun?",
    "Fret not, for even winter turns to spring, and death itself shall bow to love’s embrace.",
    "Though stars may dim and skies be torn with storm, my vow remains unshaken in its light.",
    "Time bends its will to neither king nor slave, yet love shall carve its name upon the stone.",
    "Though night doth creep upon the waning day, the fire in my heart shall not grow cold.",
    "The fickle hand of fate may shift the tide, yet still my heart shall hold thee ever near.",
  ];

  const [order, setOrder] = useState(easyText);
  const [text, setText] = useState(order[Math.floor(Math.random() * easyText.length)])
  const [isEasyText, setIsEasyText] = useState(true)
  const [input, setInput] = useState("")
  const [mistakes, setMistakes] = useState(0)

  const submit = async () => {
    const trimmedInput = input.trim()
    const trimmedText = text.trim()
    const mistakeCount = levenshteinDistance(trimmedInput, trimmedText)
    setMistakes(mistakeCount)

    const isCorrect = trimmedInput === trimmedText
    const result = isCorrect ? "Correct" : "Incorrect"

    const logEntry = { mistakes: mistakeCount, result }

    const csvData = [
      ["Mistakes", "Result"],
      [logEntry.mistakes, logEntry.result]
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

    if (isEasyText) {
      setOrder(hardText)
      setText(hardText[Math.floor(Math.random() * hardText.length)])
    } else {
      setOrder(easyText)
      setText(easyText[Math.floor(Math.random() * easyText.length)])
    }

    setIsEasyText(!isEasyText)
    textInputRef.current.clear()
    setInput("")
    Alert.alert(result)
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>{text} </Text>
      <TextInput
        ref={textInputRef}
        style={{
          marginTop: 150,
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
        onChangeText={setInput}
        value={input}
      />
      <Text style={{ marginTop: 10 }}>Mistakes: {mistakes}</Text>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <PainButtonTwo onPress={submit} text={"Submit"} />
      </View>
    </View>
  );
};

export default TextEntry