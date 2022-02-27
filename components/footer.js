import { Box, Flex, IconButton, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FaDribbble, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
      <Box as="footer" minH='10vh' display='flex' justifyContent='center' alignItems='center'>
          <Box
            width={['80%', '80%', '55%']}
            display="flex"
            justifyContent="space-between"
            flexDirection={['column-reverse', 'row', 'row']}
            rowGap='30px'
            alignItems="center"
            m="auto"
          >
              <Flex justifyContent='center' textAlign='center' alignItems="center" columnGap='5px'>
                <Text fontWeight="bold">
                  &#169; 2022 Vande Simbolon. All right reserved.
                </Text>
              </Flex>
              <Flex fontSize={22} columnGap="20px">
                <Link href='https://instagram.com/nemotives' isExternal="true">
                  <FaInstagram/>
                </Link>
                <Link href='https://twitter.com/' isExternal="true">
                  <FaTwitter/>
                </Link>
                <Link href='https://dribbble.com/' isExternal="true">
                  <FaDribbble/>
                </Link>
              </Flex>
          </Box>
      </Box>
  )
}