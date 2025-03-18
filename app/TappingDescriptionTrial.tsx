import Description from "../components/reusable/Description"
import Headline from "../components/reusable/Headline"
import PainButton from "../components/reusable/PainButton"
import {TouchableOpacity, View } from "react-native"

const TappingDescriptionTrial = () => {

  return (
    <View
        style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Headline text={"Tapping-Task"}/>
        <Description text={"A circle appears on the screen and you have to press it as quickly and accurately as possible"} />

        <TouchableOpacity onPress={() => {console.log("pressed")}}>
          <PainButton href={"/TappingTasksTrial"} text={"Continue"} />
        </TouchableOpacity>
        

    </View>
  )
}

export default TappingDescriptionTrial
