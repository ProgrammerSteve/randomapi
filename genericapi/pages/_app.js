import '../styles/globals.css'
import Navigation from '../components/navigation/Navigation';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return( 
    <>
    <UserProvider>
      <div className='w-screen h-screen flex flex-col'>
      <Navigation/>
      <Component {...pageProps} /> 
      </div>
    </UserProvider>
    </>
)
}

export default MyApp
