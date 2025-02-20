import { Text } from "react-native"



const Description = ({text}) => {
   const style={
        fontSize: 30,
        margin: 10
    }
  return (
    <Text style={style}>{text}</Text>
  )
}

export default Description