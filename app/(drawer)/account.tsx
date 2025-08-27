import { CommonStyles } from "@/constants/globalStyles";
import { Text, View } from "react-native";

export default function Account() {
  return (
    <View style={CommonStyles.container}>
      <View style={CommonStyles.contentContainer}>
        <Text style={{ padding: 20 }}>My Account</Text>
      </View>
    </View>
  );
}
