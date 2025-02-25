import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import PainButton from "../components/reusable/PainButton";

const HighlightedTextInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [height, setHeight] = useState(50);

  return (
    <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 20 }}>A icon is shown to you and you have to find it with other icons in the mix </Text>
     <TextInput
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
        onContentSizeChange={(event) =>
            setHeight(event.nativeEvent.contentSize.height + 10)
        }
      />
      <View style={{ alignItems: 'center', marginTop: 20}} >
      <PainButton href={"/yTextEntryDescription"} text={"Submit"}/>
      </View>
    </View>
  );
};

export default HighlightedTextInput;

