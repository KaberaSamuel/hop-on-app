import { styles as settingsStyles } from "@/app/settings";
import { Colors } from "@/constants/globalStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Pressable, Text } from "react-native";

function Languages() {
  const [activeLanguage, setActiveLanguage] = useState("english");

  return (
    <Pressable>
      <Pressable style={settingsStyles.header}>
        <Text>Language</Text>
      </Pressable>

      <Pressable style={settingsStyles.flexContainer}>
        <Text
          style={{ flex: 1 }}
          onPress={() => {
            setActiveLanguage("english");
          }}
        >
          English
        </Text>
        {activeLanguage === "english" && (
          <MaterialIcons name="check" color={Colors.blue[2]} size={15} />
        )}
      </Pressable>

      <Pressable
        style={[settingsStyles.flexContainer, settingsStyles.topBottomBorders]}
      >
        <Text
          style={{ flex: 1 }}
          onPress={() => {
            setActiveLanguage("francais");
          }}
        >
          Francais
        </Text>
        {activeLanguage === "francais" && (
          <MaterialIcons name="check" color={Colors.blue[2]} size={15} />
        )}
      </Pressable>

      <Pressable style={settingsStyles.flexContainer}>
        <Text
          style={{ flex: 1 }}
          onPress={() => {
            setActiveLanguage("kinyarwanda");
          }}
        >
          Kinyarwanda
        </Text>
        {activeLanguage === "kinyarwanda" && (
          <MaterialIcons name="check" color={Colors.blue[2]} size={15} />
        )}
      </Pressable>
    </Pressable>
  );
}

export default Languages;
