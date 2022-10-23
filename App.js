import { NativeBaseProvider } from "native-base";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen"

const App = () =>
{
  return (
    <NativeBaseProvider>
      <NotVerifyScreen />
    </NativeBaseProvider>
  )
}

export default App
