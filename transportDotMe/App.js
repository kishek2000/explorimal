import React from "react";
import { AppLoading } from "expo";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import {
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_700Bold,
  useFonts,
} from "@expo-google-fonts/work-sans";
import { styles } from "./Styles";
import { GapVertical, GapHorizontal } from "./Gap";

enableScreens();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.outerPage}>
      <Text style={styles.outerHeading}>transport.me</Text>
      <Text style={styles.paragraph}>All your travel needs in one place</Text>
      <GapVertical />
      <GapVertical />
      <GapVertical />

      <View style={{ width: 150 }}>
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
          color="#002ABF"
        />
      </View>
      <GapVertical />
      <View style={{ width: 150 }}>
        <Button
          title="Schedules"
          onPress={() => navigation.navigate("Schedule")}
          color="#333333"
        />
      </View>

      <Text
        style={{
          ...styles.paragraph,
          position: "absolute",
          bottom: 48,
          right: 81,
        }}
        onPress={() => navigation.navigate("Register")}
      >
        I'm New
      </Text>
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.outerPage}>
      <Text style={styles.outerHeading}>Register</Text>
      <Text>Username</Text>
      <Text>Password</Text>
    </View>
  );
}

function ScheduleScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.innerHeading}>New Trip</Text>
      <View style={styles.innerPage}></View>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.outerPage}>
      <Text style={styles.outerHeading}>Login</Text>
      <Text>Username</Text>
      <Text>Password</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode={false}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Schedule" component={ScheduleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
