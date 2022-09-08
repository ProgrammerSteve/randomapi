import '../styles/globals.css'
import Navigation from '../components/navigation/Navigation';
import { UserProvider } from '@auth0/nextjs-auth0';
function MyApp({ Component, pageProps }) {
  return( 
    <>
    <UserProvider>
      <Navigation/>
      <Component {...pageProps} /> 
    </UserProvider>
    </>
)
}

export default MyApp
