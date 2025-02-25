import { View, Text, Alert } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import Description from "../components/reusable/Description";
import PainButton from "../components/reusable/PainButton";
import PainButtonTwo from "../components/reusable/PainButtonTwo";
import * as FileSystem from "expo-file-system";

const dataPart = [
  { label: "Participant 1", value: "1" },
  { label: "Participant 2", value: "2" },
  { label: "Participant 3", value: "3" },
  { label: "Participant 4", value: "4" },
  { label: "Participant 5", value: "5" },
  { label: "Participant 6", value: "6" },
  { label: "Participant 7", value: "7" },
  { label: "Participant 8", value: "8" },
  { label: "Participant 9", value: "9" },
  { label: "Participant 10", value: "10" },
  { label: "Participant 11", value: "11" },
  { label: "Participant 12", value: "12" },
  { label: "Participant 13", value: "13" },
  { label: "Participant 14", value: "14" },
  { label: "Participant 15", value: "15" },
  { label: "Participant 16", value: "16" },
  { label: "Participant 17", value: "17" },
  { label: "Participant 18", value: "18" },
  { label: "Participant 19", value: "19" },
  { label: "Participant 20", value: "20" },
  { label: "Participant 21", value: "21" },
  { label: "Participant 22", value: "22" },
  { label: "Participant 23", value: "23" },
  { label: "Participant 24", value: "24" },
];

const dataGender = [
  { label: "Man", value: "m" },
  { label: "Woman", value: "w" },
];

const dataPain = [
  { label: "No pain", value: "0" },
  { label: "Pain", value: "1" },
];

export default function ParticipantInfo() {
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedPain, setSelectedPain] = useState(null);

  type ParticipantData = {
    participant: string | null;
    gender: string | null;
    pain: string | null;
  };

  const [data, setData] = useState<ParticipantData[]>([]);

  const saveData = async () => {
    const newEntry = {
      participant: selectedParticipant,
      gender: selectedGender,
      pain: selectedPain,
    };
    const updatedData = [...data, newEntry];

    setData(updatedData);

    //Convert Data to CSV
    const csvData = [
      ["Participant", "Gender", "Pain"],  //Header på csvfilen/Excelarket

    //(map.object.values) tager værdierne fra hvert objekt og konventere dem 
      ...updatedData.map(Object.values),  // participant: 1, gender: "m", pain: 0 } → ["1", "m", "0"]).
    ]

    //hver komma repræsenter en ny kolonne i CSVfilen/Excelarket og hver \n repræsenter en ny række/linje
    .map((row) => row.join(",")) //["1", "m", "0"] -> "1,m,0"
    .join("\n"); //newline så hver row er på en ny linje i CSVfilen/Excelarket

    console.log("Generated CSV Data:\n", csvData);

    //Where the file will be saved
    const fileUri = FileSystem.documentDirectory + "participant_data.csv";

    await FileSystem.writeAsStringAsync(fileUri, csvData, {
      encoding: FileSystem.EncodingType.UTF8,
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Description text="Enter your information" />
      <Text style={{ fontSize: 20 }}>Welcome to the Test Page!</Text>

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
        placeholder="Select Participant"
        value={selectedParticipant}
        onChange={(item) => setSelectedParticipant(item.value)}
      />

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataGender}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Gender"
        value={selectedGender}
        onChange={(item) => setSelectedGender(item.value)}
      />

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataPain}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Pain Level"
        value={selectedPain}
        onChange={(item) => setSelectedPain(item.value)}
      />

      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
          alignSelf: "center",
        }}
      >
        <PainButtonTwo  onPress={saveData} text="Save" />
      </View>
    </View>
  );
}

const styles = {
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
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
