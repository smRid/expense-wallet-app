import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { Stack} from "expo-router/stack";
import { ActivityIndicator, View } from "react-native";

export default function Layout() {
    const { isSignedIn, isLoaded } = useUser();

    if(!isLoaded) return null; 

    // if (!isLoaded) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
    //             <ActivityIndicator size="large" />
    //         </View>
    //     );
    // }

    if (!isSignedIn) return <Redirect href={"/(auth)/sign-in"} />;

    return <Stack screenOptions={{ headerShown: false}}/>;
    
}