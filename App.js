import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";

const App = () =>
{
  return (
    <NativeBaseProvider>
      <HomeScreen/>
    </NativeBaseProvider>
  )
}

export default App
