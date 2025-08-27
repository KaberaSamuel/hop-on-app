import Languages from "@/components/Languages";
import { Colors } from "@/constants/globalStyles";
import User from "@/mocks-data/user";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function Settings() {
  const fullname = User.firstname + " " + User.lastname;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* profile */}
      <View style={styles.profileContainer}>
        <MaterialIcons name="account-circle" size={90} color={Colors.gray[2]} />
        <View style={styles.accountContainer}>
          <Text style={styles.username}>{fullname}</Text>
          <Text>{User.email}</Text>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={12} />
      </View>

      {/* addresses */}
      <View>
        <View style={styles.header}>
          <Text>Favorite Places</Text>
        </View>

        <View style={styles.flexContainer}>
          <MaterialIcons name="home" color={Colors.gray[2]} size={24} />
          <Text style={{ flex: 1 }}>Add Home Adress</Text>
          <MaterialIcons name="arrow-forward-ios" size={12} />
        </View>
        <View style={[styles.flexContainer, styles.addressMiddleContainer]}>
          <MaterialIcons
            name="corporate-fare"
            color={Colors.gray[2]}
            size={24}
          />
          <Text style={{ flex: 1 }}>Add Work Adress</Text>
          <MaterialIcons name="arrow-forward-ios" size={12} />
        </View>
        <View style={styles.flexContainer}>
          <MaterialIcons name="school" color={Colors.gray[2]} size={24} />
          <Text style={{ flex: 1 }}>Add School Adress</Text>
          <MaterialIcons name="arrow-forward-ios" size={12} />
        </View>
      </View>

      {/* Security */}
      <View>
        <View style={styles.header}>
          <Text>Security and Privacy</Text>
        </View>

        <View
          style={[
            styles.flexContainer,
            styles.borderBottom,
            { paddingVertical: 5 },
          ]}
        >
          <Text style={{ flex: 1 }}>Allow drivers to call me</Text>
          <Switch
            trackColor={{ false: Colors.gray[2], true: Colors.blue[2] }}
            thumbColor={isEnabled ? Colors.blue[1] : Colors.gray[1]}
            ios_backgroundColor={Colors.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={styles.flexContainer}>
          <Text style={{ flex: 1 }}>Edit password</Text>
          <MaterialIcons name="arrow-forward-ios" size={12} />
        </View>
      </View>

      {/* language */}
      <Languages />

      {/* legal */}
      <View>
        <View style={styles.header}>
          <Text>Legal</Text>
        </View>

        <View style={[styles.flexContainer, styles.borderBottom, ,]}>
          <Text style={{ flex: 1 }}>Terms and Conditions</Text>
          <MaterialIcons name="arrow-forward-ios" size={12} />
        </View>

        <View style={styles.flexContainer}>
          <Text style={{ flex: 1 }}>Privacy Policy</Text>
          <MaterialIcons name="arrow-forward-ios" size={12} />
        </View>
      </View>

      {/* contact */}
      <View>
        <View style={styles.header}>
          <Text>Reach Us</Text>
        </View>

        <View style={styles.flexContainer}>
          <Text style={{ flex: 1 }}>Visit our website</Text>
          <MaterialIcons name="arrow-forward-ios" size={12} />
        </View>

        <View style={[styles.flexContainer, styles.addressMiddleContainer]}>
          <Text style={{ flex: 1 }}>Contact us</Text>
          <MaterialIcons name="arrow-forward-ios" size={12} />
        </View>
      </View>

      {/* delete account */}
      <View style={[styles.header, { backgroundColor: Colors.gray[0] }]}>
        <Text style={styles.delete}>Delete account</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    color: Colors.black,
  },

  profileContainer: {
    padding: 20,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: Colors.gray[0],
  },

  accountContainer: {
    gap: 2,
    flex: 1,
  },

  flexContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  addressMiddleContainer: {
    borderColor: Colors.gray[1.5],
    borderWidth: 1,
    borderStyle: "solid",
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },

  header: {
    padding: 20,
    backgroundColor: Colors.gray[1],
  },

  delete: {
    color: "#fb2c36",
    textTransform: "uppercase",
  },
  username: {
    fontWeight: "600",
    textTransform: "capitalize",
  },

  borderBottom: {
    borderBottomColor: Colors.gray[1.5],
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});
