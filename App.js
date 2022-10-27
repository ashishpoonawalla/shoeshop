import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";
import SingleProductScreen from "./src/Screens/SingleProductScreen";

const App = () =>
{
  return (
    <NativeBaseProvider>
      <SingleProductScreen />
    </NativeBaseProvider>
  )
}

export default App
