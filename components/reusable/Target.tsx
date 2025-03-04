import { View } from 'react-native'

const Target = () => {
    const OuterTarget = {
        width: 70,
        height: 70,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "blue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const InnerTarget = {
        width: 5,
        height: 5,
        borderRadius: 100,
        backgroundColor: "blue",
    }
  return (
    <View style={OuterTarget} >
        <View style={InnerTarget}></View>
    </View>
  )
}

export default Target
