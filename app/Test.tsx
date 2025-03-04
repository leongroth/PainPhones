import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Test = () => {
  const [time, setTime] = useState(0)
  const navigation = useNavigation()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime >= 5) {
          clearInterval(interval)
          navigation.navigate('TappingDone') // Replace 'NextPage' with the name of your next screen
          return prevTime
        }
        return prevTime + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [navigation])

  return (
    <View>
      <Text>Elapsed Time: {time} seconds</Text>
    </View>
  )
}

export default Test