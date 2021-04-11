import { AuthProvider } from '../contexts/auth'
import Routes from '../routes/index'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      
      <Routes />
      {/* <Component {...pageProps} /> */}
    </AuthProvider>
  )
}

export default MyApp
