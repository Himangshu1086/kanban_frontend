import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Link href="/"><h1 className='p-5 shadow-md shadow-blue-300 bg-blue-400 text-2xl text-black-400'>Home</h1></Link>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
