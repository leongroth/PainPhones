import { Text } from "react-native"

const Headline = ({text}) => {
    const style= {
        fontSize:"100px",
        fontFamily:"helvetica",
        margin:"10px"
    }
      return (
    <Text style={style}>{text}</Text>
  )
}

export default Headline