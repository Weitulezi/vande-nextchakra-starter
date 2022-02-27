import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import "@fontsource/quicksand/700.css";
import "@fontsource/quicksand/500.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      { getLayout(<Component  {...pageProps} />) }
    </ChakraProvider>
  )
}

export default MyApp