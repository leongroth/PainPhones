import { View } from 'react-native'
import Headline from "../components/reusable/Headline";
import PainButton from "../components/reusable/PainButton"

const TappingDone = () => {
  return (
    <View
        style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Headline text={"1/3"}/>
        <Headline text={"Done"}/>
        <PainButton href={"/"} text={"Continue"} />
    </View>
  )
}

export default TappingDone
