import OuterContainer from "@/components/OuterContainer";
import { Colors, CommonStyles } from "@/constants/globalStyles";
import User from "@/mocks-data/user";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

export default function Account() {
  return (
    <OuterContainer>
      <View style={CommonStyles.contentContainer}>
        <View style={styles.profileContainer}>
          <MaterialIcons
            name="account-circle"
            size={90}
            color={Colors.gray[1]}
          />
          <Text style={styles.profileText}>Change Profile Picture</Text>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <Text style={styles.important}>First Name</Text>
            <Text style={styles.username}>{User.firstname}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.important}>Last Name</Text>
            <Text style={styles.username}>{User.lastname}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.important}>Phone Number</Text>
            <Text>{User.phone_number}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.important}>Email</Text>
            <Text>{User.email}</Text>
          </View>
        </View>
      </View>
    </OuterContainer>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    paddingVertical: 30,
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.dark[2],
  },

  profileText: {
    color: Colors.blue[2],
  },

  detailsContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 15,
  },

  details: {
    gap: 10,
    borderBottomColor: Colors.gray[1.5],
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingVertical: 10,
  },

  important: {
    fontWeight: "600",
  },

  username: {
    textTransform: "capitalize",
  },
});
