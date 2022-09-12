import '../styles/globals.css'
import Navigation from '../components/navigation/Navigation';
import { UserProvider } from '@auth0/nextjs-auth0';
import SidebarProvider from '../context/SidebarContext';

function MyApp({ Component, pageProps }) {
  return( 
    <>
    <UserProvider>
    <SidebarProvider>
      <div className='w-screen h-screen flex flex-col'>
      <Navigation/>
      <Component {...pageProps} /> 
      </div>
    </SidebarProvider>
    </UserProvider>
    </>
)
}

export default MyApp
