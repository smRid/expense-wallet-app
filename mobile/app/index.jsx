import { Link } from "expo-router";
import { Image } from "expo-image";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={{color: "blue"}}>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/about"}>About</Link>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
