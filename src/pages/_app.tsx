import { AuthProvider } from '../contexts/auth'
import Routes from '../routes/index'
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      
      <Routes />
      {/* <Component {...pageProps} /> */}
    </AuthProvider>
  )
}

export default MyApp
