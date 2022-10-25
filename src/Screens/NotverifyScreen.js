import
{
  Box,
  Image,
  VStack,
  Center,
} from "native-base"
import React from "react"
import Colors from "../color"
import { Ionicons, AntDesign } from "@expo/vector-icons"
import Buttone from "../Components/Buttone"

const NotverifyScreen = () =>
{
  return (
    <Box w="full" flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250} pt={40}>
        <Image source={require("../../assets/logo2.png")}
          alt="Logo" rounded="50%" size="lg"
        />
        <VStack w="full" space={6} pt={20} px={5} alignItems="center">
          <Buttone bg={Colors.black} color={Colors.white}>REGISTER</Buttone>
          <Buttone bg={Colors.white} color={Colors.black}>LOGIN</Buttone>
        </VStack>
      </Center>
    </Box>
  )
}

export default NotverifyScreen