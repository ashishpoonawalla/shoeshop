import { Box, ScrollView, Text } from 'native-base'
import React from 'react'
import Colors from "../color"

const SingleProductScreen = () => {
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image source={require("../../assets/images/1.jpg")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"

        />
      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen