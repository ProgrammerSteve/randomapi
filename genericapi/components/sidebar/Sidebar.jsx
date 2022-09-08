
import { useState, useEffect } from 'react';
import { Navbar, UnstyledButton, Tooltip, Title } from '@mantine/core';
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
import { MantineLogo } from '@mantine/ds';
import { useStyles } from './SidebarStyle';

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconUser, label: 'Profile' },
  { icon: IconMessage2, label: 'Chat' },
  // { icon: IconGauge, label: 'Dashboard' },
  // { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  // { icon: IconCalendarStats, label: 'Releases' },
  // { icon: IconFingerprint, label: 'Security' },
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
  'Messages',
  'Friends',
  'Online',
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

  
export default function Sidebar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Home');
  const [activeLink, setActiveLink] = useState('Settings');


  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
      >
        <link.icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const linkArray=NavbarLinks[active]
  const links = linkArray.map((link) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));


  return (
    <div>
    <Navbar height={750} width={{ sm: 300 }}>
      <Navbar.Section grow className={classes.wrapper}>

        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {mainLinks}
        </div>


        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>
          {links}
        </div>

      </Navbar.Section>
    </Navbar>
    </div>
  );
}

