import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import GlobalStyle from '../GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
