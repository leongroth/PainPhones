import { View, Text } from "react-native";
import Headline from "@/components/reusable/Headline";
import {Dropdown} from 'react-native-element-dropdown'
import { useState } from "react";
import Description from "@/components/reusable/Description";

const dataPart= [
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

const dataGender=[
  {label: 'Man', value:'m'},
  {label:'Woman', value:'w'}
]

const dataPain=[
  {label: 'No pain', value:'0'},
  {label:'Pain', value:'1'}
]

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  return(
    <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataPart}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    );
  };

  const DropdownComponentGender = () => {
    const [value, setValue] = useState(null);
  
    return(
      <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataGender}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select gender"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
      );
    };

    const DropdownComponentPain = () => {
      const [value, setValue] = useState(null);
    
      return(
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataPain}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select pain or no pain"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
          />
        );
      };

export default function TestScreen() {
  return (
    <View

    >
        <Description text={"Enter your information"}/>
      <Text style={{ fontSize: 20 }}>Welcome to the Test Page!</Text>
      <DropdownComponent/>
      <DropdownComponentGender/>
      <DropdownComponentPain/>
    </View>
  );
}

const styles = {
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
};
