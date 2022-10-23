import HomeScreen from "./src/Screens/HomeScreen"
import { Box, NativeBaseProvider, Text } from "native-base";

const App = () =>
{
  return (
    <NativeBaseProvider>
      <HomeScreen/>
    </NativeBaseProvider>
  )
}

export default App
