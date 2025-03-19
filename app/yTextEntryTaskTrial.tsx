import React, { useRef, useState, useEffect } from "react";
import { TextInput, View, Text, Alert } from "react-native";
import PainButtonTwo from "../components/reusable/PainButtonTwo";
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";

// Levenshtein distance algorithm
const levenshteinDistance = (a, b) => {
  const an = a ? a.length : 0;
  const bn = b ? b.length : 0;
  if (an === 0) return bn;
  if (bn === 0) return an;
  const matrix = Array(an + 1)
    .fill(null)
    .map(() => Array(bn + 1).fill(null));
  for (let i = 0; i <= an; i += 1) {
    matrix[i][0] = i;
  }
  for (let j = 0; j <= bn; j += 1) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= an; i += 1) {
    for (let j = 1; j <= bn; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
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
  const timeStampStart = new Date();
  const timeStampMilli =
    timeStampStart.getHours() * 3600000 +
    timeStampStart.getMinutes() * 60000 +
    timeStampStart.getSeconds() * 1000 +
    timeStampStart.getMilliseconds();
  const [timeStampArray, setTimeStampArray] = useState([timeStampMilli]);
  const timeLimit = 1000;
  const [time, setTime] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime >= timeLimit) {
          clearInterval(interval);
          navigation.navigate("yTextEntryDoneTrial"); // Replace 'NextPage' with the name of your next screen
          return prevTime;
        }
        return prevTime + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigation]);

  const [isFocused, setIsFocused] = useState(false);
  const [height, setHeight] = useState(50);
  const textInputRef = useRef(null);

  const easyText = [
    { id: "E1", text: "There is a cat on the big chair." },
    { id: "E2", text: "A dog runs in the yard with us." },
    { id: "E3", text: "The sun is hot in the blue sky." },
    { id: "E4", text: "A bird sits on the old fence." },
    { id: "E5", text: "There is a bug on my small hand." },
    { id: "E6", text: "The kid plays in the cold snow." },
    { id: "E7", text: "A fish swims in the deep pond." },
    { id: "E8", text: "There is a bee in the red rose." },
    { id: "E9", text: "The bell rings in the quiet hall." },
    { id: "E10", text: "A frog jumps in the wet grass." },
  ];

  const hardText = [
    {
      id: "H1",
      text: "Let not the winds of fate erase my name. My soul shall in thy heart forever stay.",
    },
    {
      id: "H2",
      text: "Though time may steal the youth from out my face, my love within thy gaze shall never pale.",
    },
    {
      id: "H3",
      text: "Yet shall the moonlight grace the silent shore, though waves may rise and crash against the stone.",
    },
    {
      id: "H4",
      text: "Speak now thy truth ere silence binds thy tongue, for words once lost shall never more be found.",
    },
    {
      id: "H5",
      text: "Dost thou still dream when night begins to fall? Or doth the dawn unmake what darkness spun?",
    },
    {
      id: "H6",
      text: "Fret not, for even winter turns to spring, and death itself shall bow to loves embrace.",
    },
    {
      id: "H7",
      text: "Though stars may dim and skies be torn with storm, my vow remains unshaken in its light.",
    },
    {
      id: "H8",
      text: "Time bends its will to neither king nor slave, yet love shall carve its name upon the stone.",
    },
    {
      id: "H9",
      text: "Though night doth creep upon the waning day, the fire in my heart shall not grow cold.",
    },
    {
      id: "H10",
      text: "The fickle hand of fate may shift the tide, yet still my heart shall hold thee ever near.",
    },
  ];

  const [order, setOrder] = useState(easyText);
  const [text, setText] = useState(
    order[Math.floor(Math.random() * easyText.length)]
  );
  const [isEasyText, setIsEasyText] = useState(true);
  const [input, setInput] = useState("");
  const [mistakes, setMistakes] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [usedSentences, setUsedSentences] = useState([]);
  const [diff, setDiff] = useState("easy");

  const submit = () => {
    const trimmedInput = input.trim();
    const trimmedText = text.text.trim();
    const mistakeCount = levenshteinDistance(trimmedInput, trimmedText);
    setMistakes(mistakeCount);
    const newTimeStamp = new Date();
    const minTimeStamp =
      newTimeStamp.getHours() * 3600000 +
      newTimeStamp.getMinutes() * 60000 +
      newTimeStamp.getSeconds() * 1000 +
      newTimeStamp.getMilliseconds();
    const elapsedTime =
      minTimeStamp - timeStampArray[timeStampArray.length - 1];
    setTimeStampArray([...timeStampArray, minTimeStamp]);
    const isCorrect = trimmedInput === trimmedText;
    const result = isCorrect ? "Correct" : "Incorrect";
    setUsedSentences([...usedSentences, text]);

    let newText;
    if (isEasyText) {
      setDiff("hard");
      setOrder(hardText);
      do {
        newText = hardText[Math.floor(Math.random() * hardText.length)];
      } while (usedSentences.includes(newText));
      setText(newText);
    } else {
      setDiff("easy");
      setOrder(easyText);
      do {
        newText = easyText[Math.floor(Math.random() * easyText.length)];
      } while (usedSentences.includes(newText));
      setText(newText);
    }

    setIsEasyText(!isEasyText);
    textInputRef.current.clear();
    setInput("");
    //Alert.alert(result)
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>{text.text} </Text>
      <Input
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
        onChange={(event) => {
          setInput(event.nativeEvent.text);
          setCharCount(charCount + 1);
        }}
      />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <PainButtonTwo onPress={submit} text={"Submit"} />
      </View>
    </View>
  );
};

export default TextEntry;
