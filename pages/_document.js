import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='title' content='your-website-title'/>
        <meta name="description" content="your-website-description"/>   

        <link rel="icon" href=""/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}