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
} from "native-base"
import React from "react"
import Colors from "../color"
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons"

const RegisterScreen = () =>
{
  return (
    <Box flex={1} bg={Colors.main}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/screen3.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="20"
        px="6"
        justifyContent="center">
        <Heading>SIGN UP</Heading>
        <VStack space={4} pt="6">
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={24} color={Colors.main} />
            }
            variant="underlined"
            placeholder="username"
            type="text"
            w="70%"
            color={Colors.black}
            borderBottomColor={Colors.underline}
          />

          <Input
            InputLeftElement={
              <Ionicons
                name="mail"
                size={20}
                color={Colors.main}
              />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            type="email"
            w="70%"
            color={Colors.black}
            borderBottomColor={Colors.underline}
          />


          <Input
            InputLeftElement={
              <AntDesign
                name="eye"
                size={24}
                color={Colors.main}
              />
            }
            variant="underlined"
            placeholder="********"
            type="password"
            w="70%"
            color={Colors.black}
            borderBottomColor={Colors.underline}
          />
        </VStack>

        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}>
          SIGN UP
        </Button>
        <Pressable mt={4}>
          <Text color={Colors.lightBlack}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  )
}

export default RegisterScreen