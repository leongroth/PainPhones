import { View } from 'react-native'

const Target = () => {
    const OuterTarget = {
        width: 90,
        height: 90,
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
    <View style={OuterTarget} 
    //onLayout={({nativeEvent}) => {console.log ("Targetc", Math.round(nativeEvent.layout.width*3), Math.round(nativeEvent.layout.height*3))}}
    >

        <View style={InnerTarget}></View>
    </View>
  )
}

export default Target
