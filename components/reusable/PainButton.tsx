import { Link } from "expo-router"
import { View, StyleSheet } from "react-native"

const PainButton = ({href , text}) => {

    const style = {
        margin:20,
        backgroundColor: "lightgray",
        padding: 10,
        width: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        borderRadius: 5,
        boxShadow: "1 2 7 grey",
    }

  return (
    <Link href={href} style={style}>
        {text}
    </Link>
  )
}

export default PainButton