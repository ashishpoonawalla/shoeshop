import { Box, ScrollView, Image, Heading, HStack, Spacer, Text } from 'native-base'
import React, { useState } from 'react'
import NumericInput from 'react-native-numeric-input'
import Colors from "../color"
import Rating from '../Components/Rating'
import Buttone from "../Components/Buttone"
import Review from '../Components/Review'

const SingleProductScreen = () =>
{
  const [value, setValue] = useState(0)
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/1.jpg")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"

        />
        <Heading bold
          fontSize={15}
          mb={2}
          lineHeight={22}
        >New Nike shoe from Amazon Shop
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput value={value} totalWidth={140} totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={1}
            borderColor={Colors.deepGrey}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            $400
          </Heading>

        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.
        </Text>
        <Buttone bg={Colors.main} color={Colors.white} mt={5}>
          ADD TO CART
        </Buttone>

        {/* Review */}
        <Review/>

      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen