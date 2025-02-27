import React, { useRef, useState } from "react";
import { TextInput, View, Text } from "react-native";
import PainButton from "../components/reusable/PainButton";
import PainButtonTwo from "../components/reusable/PainButtonTwo";

const HighlightedTextInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [height, setHeight] = useState(50);
  const textInputRef = useRef(null);


  const easyText= [
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
  ]

  const hardText= [
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
  ]
  const [order, setOrder] = useState(easyText);
  const [text, setText] = useState(order[Math.floor(Math.random() * easyText.length)]);
  const [isEasyText, setIsEasyText] = useState(true);
  const [input, setInput] = useState("");

  const submit = () => {
    if (isEasyText) {
      setOrder(hardText);
      setText(hardText[Math.floor(Math.random() * hardText.length)]);
    } else {
      setOrder(easyText);
      setText(easyText[Math.floor(Math.random() * easyText.length)]);
    }
    setIsEasyText(!isEasyText);
    textInputRef.current.clear()
    if (input === text) {
      alert("Correct!")
    }
    else {
      alert("Incorrect!")
    }
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
        onChangeText={newText => setInput(newText)}
      />
      <View style={{ alignItems: 'center', marginTop: 20}} >
      <PainButtonTwo onPress={submit} text={"Submit"}/>
      </View>
    </View>
  )
}

export default HighlightedTextInput;


