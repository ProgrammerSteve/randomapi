import { createContext, useEffect, useState } from "react";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconMessage2,
  IconSearch,
} from '@tabler/icons';

const mainLinksArr = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconUser, label: 'Profile' },
  { icon: IconMessage2, label: 'Chat' },
  { icon: IconSearch, label: 'Search' },
  { icon: IconSettings, label: 'Settings' },
];

const linksHome = [
  'Timeline',
  'Trending',
  'Posts',
  'Gallery',
];

const linksProfile = [
  'Information',
  'Settings',
  'Account',
  'Recent Activity',
];

const linksChat= [
  'Friends',
  'Online',
  'Messages',
];

const linksSearch= [
  'Search ID',
  'Search Username',
];

const linksSettings= [
  'Security',
  'Settings',
  'Releases',
  'Account',
];

const NavbarLinks={
  Home: linksHome,
  Profile: linksProfile,
  Chat: linksChat,
  Search:linksSearch,
  Settings: linksSettings,
}

export const SidebarContext=createContext();
const SidebarProvider=({children})=>{
  const [active, setActive] = useState('Home');
  const [activeLink, setActiveLink] = useState('Timeline');

  const handleActiveLink=(activeLink)=>{
    setActiveLink(activeLink)
  }
  const handleActive=(active)=>{
    setActive(active)
  }

  useEffect(()=>{
    switch(active){
      case 'Home':
        setActiveLink(linksHome[0])
        break;
      case 'Profile':
        setActiveLink(linksProfile[0])
        break;
      case 'Chat':
        setActiveLink(linksChat[0])
        break;
      case 'Search':
        setActiveLink(linksSearch[0])
        break;
      case 'Settings':
        setActiveLink(linksSettings[0])  
        break;
    }
  },[active])




  const value={
    mainLinksArr,
    linksHome,
    linksProfile,
    linksChat,
    linksSearch,
    linksSettings,
    NavbarLinks,
    active,
    activeLink,
    handleActive,
    handleActiveLink
  }
  return(
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  )
}
export default SidebarProvider