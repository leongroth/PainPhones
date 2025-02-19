import { Link } from "expo-router"
import { View, StyleSheet } from "react-native"

const PainButton = ({href , text}) => {

    const style = {
        margin:"20px",
        backgroundColor: "lightgray",
        padding: "10px",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize:"30px",
        borderRadius: "5px",
        boxShadow: "1px 2px 7px grey",
    }

  return (
    <Link href={href} style={style}>
        {text}
    </Link>
  )
}

export default PainButton