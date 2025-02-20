import { View, Text } from "react-native";
import Headline from "@/components/reusable/Headline";
import {Dropdown} from 'react-native-element-dropdown'
import { useState } from "react";

const data= [
  {label: 'Participant 1', value:'1'},
  {label: 'Participant 2', value:'2'},
  {label: 'Participant 3', value:'3'},
  {label: 'Participant 4', value:'4'},
  {label: 'Participant 5', value:'5'},
  {label: 'Participant 6', value:'6'},
  {label: 'Participant 7', value:'7'},
  {label: 'Participant 8', value:'8'},
  {label: 'Participant 9', value:'9'},
  {label: 'Participant 10', value:'10'},
  {label: 'Participant 11', value:'11'},
  {label: 'Participant 12', value:'12'},
  {label: 'Participant 13', value:'13'},
  {label: 'Participant 14', value:'14'},
  {label: 'Participant 15', value:'15'},
  {label: 'Participant 16', value:'16'},
  {label: 'Participant 17', value:'17'},
  {label: 'Participant 18', value:'18'},
  {label: 'Participant 19', value:'19'},
  {label: 'Participant 20', value:'20'},
  {label: 'Participant 21', value:'21'},
  {label: 'Participant 22', value:'22'},
  {label: 'Participant 23', value:'23'},
  {label: 'Participant 24', value:'24'}
]

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
}

export default function TestScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Headline text={"Enter your information"}/>
      <Text style={{ fontSize: 20 }}>Welcome to the Test Page!</Text>
      <DropdownComponent></DropdownComponent>
    </View>
  );
}
