import Navbar from '../components/Navbar'

import GlobalStyle from '../GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
