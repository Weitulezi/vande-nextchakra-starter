/* eslint-disable react/jsx-key */
import { Box, Flex, Heading, IconButton, useColorMode, Link, Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { CgMenu } from 'react-icons/cg'
import { IoIosRocket } from 'react-icons/io'
import { MdWork, MdRoomService } from 'react-icons/md'
import NextLink from 'next/link'

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Box 
      as="nav"
      minH="10vh" 
      justifyContent="center" 
      alignItems="center"
    >
      <Flex 
        key="1"
        bg={colorMode == "dark" ? "#202023" : "white"} 
        position="fixed" 
        width="100%"  
        minH="10vh"  
        justifyContent="center" 
        alignItems="center"
      >
        <Flex 
          width={["80%", "80%", '55%']} 
          m="auto" 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Flex
            justify="center"
            alignItems="center"
          >
            <NextLink href="/" passHref>
                <a>
                  <Flex alignItems='center' columnGap='2'>
                    <IoIosRocket size={24}/>
                    <Heading fontSize={['18px', '24px', '24px']}>Vande-Starter</Heading>
                  </Flex>
                </a>
            </NextLink>
          </Flex>
          <Flex
            display={['none', 'none', 'flex']}
            justifyContent="center"
            alignItems="center"
            columnGap="30px"
            fontWeight="700"
          >
            <Link href='https://github.com/Weitulezi/vande-nextchakra-starter' passHref isExternal>
              Github
            </Link>
            <IconButton icon={colorMode == 'dark' ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode} isRound/>
          </Flex>
          <Flex
            display={['flex', 'flex', 'none']}
            columnGap='15px'
          >
            <IconButton icon={colorMode == 'dark' ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode} isRound/>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Button}>
                    <CgMenu/>
                  </MenuButton>
                  <MenuList>
                    <Link href="https://github.com/Weitulezi/vande-nextchakra-starter" isExternal display='flex' alignItems='center' columnGap='2'>
                      <MenuItem>
                        Github
                      </MenuItem>
                    </Link>
                  </MenuList>
                </>
              )}
            </Menu>         
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar