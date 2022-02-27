import { Box, Code, Flex, HStack, Text } from '@chakra-ui/react'
import MainLayout from '../components/layouts/main'

export default function Home() {
  return (
    <Box display='flex' justifyContent='center'>
      <Flex 
        minH='80vh'
        width={['80%', '80%', '55%']}
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        rowGap='20px'
      >
        <Text as='h1' fontSize="30" align='center' fontWeight='bold'>
          Vande-NextJS-Chakra-UI
        </Text>
        <Code width='fit-content' align='center' mx='auto' p='5px 10px' borderRadius='5px'>
          npx create-next-app --example https://github.com/weitulezi/vande-nextchakra-starter [YOUR_APP_NAME]
        </Code>
        <Text as='h4'>Pre installed dependencies</Text>
        <HStack spacing={3} color='white' wrap='wrap' rowGap={3} justifyContent='center' alignItems='center'>
          <Text as='h3' fontSize='18px' bg="customBlue" p="2px 8px" borderRadius={5}>chakra-ui</Text>
          <Text as='h3' fontSize='18px' bg="customRed" p="2px 8px" borderRadius={5}>react-icons</Text>
          <Text as='h3' fontSize='18px' bg="customYellow" p="2px 8px" borderRadius={5}>@fontsource/quicksand</Text>
        </HStack>
      </Flex>
    </Box>
  )
}

Home.getLayout = (page) => {
    return (
      <MainLayout>
        {page}
      </MainLayout>
    )
}