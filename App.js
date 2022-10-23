import HomeScreen from "./src/Screens/HomeScreen"
import { Box, NativeBaseProvider, Text } from "native-base";
import LoginScreen from "./src/Screens/LoginScreen";

const App = () =>
{
  return (
    <NativeBaseProvider>
      <LoginScreen/>
    </NativeBaseProvider>
  )
}

export default App
