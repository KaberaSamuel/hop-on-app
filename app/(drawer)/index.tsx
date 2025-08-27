import Navbar from "@/components/Navbar";
import OuterContainer from "@/components/OuterContainer";
import { Colors, CommonStyles } from "@/constants/globalStyles";
import { useHeaderHeight } from "@react-navigation/elements";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top } = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  // console.log(headerHeight);
  return (
    <OuterContainer>
      <View
        style={[
          CommonStyles.contentContainer,
          { marginBottom: -10, transform: [{ translateY: top }] },
        ]}
      >
        <Navbar />

        <View style={styles.textContainer}>
          <Text style={styles.text}>Welcome To Hop On App</Text>
        </View>
      </View>
    </OuterContainer>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: Colors.black,
  },

  button: {
    color: Colors.black,
    marginTop: 5,
  },
});
