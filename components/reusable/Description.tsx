import { Text } from "react-native"



const Description = ({text}) => {
   const style={
        fontSize:"30px",
        margin:"10px"
    }
  return (
    <Text style={style}>{text}</Text>
  )
}

export default Description