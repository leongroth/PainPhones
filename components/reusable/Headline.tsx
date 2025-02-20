import { Text } from "react-native"

const Headline = ({text}) => {
    const style= {
        fontSize:"100",
        fontFamily:"helvetica",
        margin:"10"
    }
      return (
    <Text style={style}>{text}</Text>
  )
}

export default Headline