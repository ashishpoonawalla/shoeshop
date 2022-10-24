import
{
  Box,
  View,
  Text,
  Image,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
  Center,
} from "native-base"
import React from "react"
import Colors from "../color"
import { Ionicons, AntDesign } from "@expo/vector-icons"
import Buttone from "../../components/Buttone"

const NotverifyScreen = () =>
{
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image source={require("../../assets/logo2.png")}
          alt="Logo" rounded="50%" size="lg"
        />
        <VStack space={6} pt={10} px={5} alignItems="center">
          <Buttone>REGISTER</Buttone>
        </VStack>
      </Center>
    </Box>
  )
}

export default NotverifyScreen