import { View, Text, Box, Heading } from 'native-base'
import React from 'react'
import Colors from '../color'
import Rating from './Rating'

const Review = () =>
{
    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            {/* IF THERE IS NO REVIEW */}


            {/* REVIEW */}
            <Box p={3} bg={Colors.deepGrey} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                    User Doe
                </Heading>
                <Rating value={4} />
                <Text mb={3}>Jan 12 2022</Text>
            </Box>
        </Box>
    )
}

export default Review