import Languages from "@/components/Languages";
import OuterContainer from "@/components/OuterContainer";
import { Colors, settingsStyles } from "@/constants/globalStyles";
import User from "@/mocks-data/user";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";

export default function Settings() {
  const fullname = User.firstname + " " + User.lastname;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <OuterContainer>
      <ScrollView>
        <View style={settingsStyles.contentContainer}>
          {/* profile */}
          <View style={settingsStyles.profileContainer}>
            <MaterialIcons
              name="account-circle"
              size={90}
              color={Colors.gray[2]}
            />
            <View style={settingsStyles.accountContainer}>
              <Text style={settingsStyles.username}>{fullname}</Text>
              <Text>{User.email}</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={12} />
          </View>

          {/* addresses */}
          <View>
            <View style={settingsStyles.header}>
              <Text>Favorite Places</Text>
            </View>

            <View style={settingsStyles.flexContainer}>
              <MaterialIcons name="home" color={Colors.gray[2]} size={24} />
              <Text style={{ flex: 1 }}>Add Home Adress</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} />
            </View>
            <View
              style={[
                settingsStyles.flexContainer,
                settingsStyles.topBottomBorders,
              ]}
            >
              <MaterialIcons
                name="corporate-fare"
                color={Colors.gray[2]}
                size={24}
              />
              <Text style={{ flex: 1 }}>Add Work Adress</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} />
            </View>
            <View style={settingsStyles.flexContainer}>
              <MaterialIcons name="school" color={Colors.gray[2]} size={24} />
              <Text style={{ flex: 1 }}>Add School Adress</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} />
            </View>
          </View>

          {/* Security */}
          <View>
            <View style={settingsStyles.header}>
              <Text>Security and Privacy</Text>
            </View>

            <View
              style={[
                settingsStyles.flexContainer,
                settingsStyles.borderBottom,
                { paddingVertical: 5 },
              ]}
            >
              <Text style={{ flex: 1 }}>Allow drivers to call me</Text>
              <Switch
                trackColor={{ false: Colors.gray[2], true: Colors.blue[2] }}
                thumbColor={isEnabled ? Colors.blue[0] : Colors.gray[1]}
                ios_backgroundColor={Colors.white}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View style={settingsStyles.flexContainer}>
              <Text style={{ flex: 1 }}>Edit password</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} />
            </View>
          </View>

          {/* language */}
          <Languages />

          {/* legal */}
          <View>
            <View style={settingsStyles.header}>
              <Text>Legal</Text>
            </View>

            <View
              style={[
                settingsStyles.flexContainer,
                settingsStyles.borderBottom,
                ,
              ]}
            >
              <Text style={{ flex: 1 }}>Terms and Conditions</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} />
            </View>

            <View style={settingsStyles.flexContainer}>
              <Text style={{ flex: 1 }}>Privacy Policy</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} />
            </View>
          </View>

          {/* contact */}
          <View>
            <View style={settingsStyles.header}>
              <Text>Reach Us</Text>
            </View>

            <View style={settingsStyles.flexContainer}>
              <Text style={{ flex: 1 }}>Visit our website</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} />
            </View>

            <View
              style={[
                settingsStyles.flexContainer,
                settingsStyles.topBottomBorders,
              ]}
            >
              <Text style={{ flex: 1 }}>Contact us</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} />
            </View>
          </View>

          {/* delete account */}
          <View
            style={[settingsStyles.header, { backgroundColor: Colors.gray[0] }]}
          >
            <Text style={settingsStyles.delete}>Delete account</Text>
          </View>
        </View>
      </ScrollView>
    </OuterContainer>
  );
}
