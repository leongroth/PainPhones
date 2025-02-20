import React from 'react'
import { View } from 'react-native'
import Description from '@/components/reusable/Description'

const xFindIconTaskTwo = () => {
const rowHeight = 100/6

  const columnStyle = {
    flexDirection: "column",
    width: "100%",
    height: "100%"
  }
  const rowStyle = {
    flexDirection: "row",
    height: `${rowHeight}%`
  }
  const boxStyle = {
    borderWidth: 1,
    width: "25%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  // tilføje icons
  return (
    <View style={columnStyle}>
      <View style={rowStyle}>
        <View style={boxStyle} >1
          <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 10,
            backgroundColor: "#000000",
            marginTop: 20
          }}
          >
          </View>
          <Description text={"Icon"}/> 
        </View>

        <View style={boxStyle} >2</View>
        <View style={boxStyle} >3</View>
        <View style={boxStyle} >4</View>
      </View>
      <View style={rowStyle}>
        <View style={boxStyle} >5</View>
        <View style={boxStyle} >6</View>
        <View style={boxStyle} >7</View>
        <View style={boxStyle} >8</View>
      </View>
      <View style={rowStyle}>
        <View style={boxStyle} >9</View>
        <View style={boxStyle} >10</View>
        <View style={boxStyle} >11</View>
        <View style={boxStyle} >12</View>
      </View>
      <View style={rowStyle}>
        <View style={boxStyle} >13</View>
        <View style={boxStyle} >14</View>
        <View style={boxStyle} >15</View>
        <View style={boxStyle} >16</View>
      </View>
      <View style={rowStyle}>
        <View style={boxStyle} >17</View>
        <View style={boxStyle} >18</View>
        <View style={boxStyle} >19</View>
        <View style={boxStyle} >20</View>
      </View>
      <View style={rowStyle}>
        <View style={boxStyle} >21</View>
        <View style={boxStyle} >22</View>
        <View style={boxStyle} >23</View>
        <View style={boxStyle} >24</View>
      </View>
    </View>
  )
}

export default xFindIconTaskTwo