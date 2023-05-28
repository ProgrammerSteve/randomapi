import { useContext } from "react";
import { Navbar, UnstyledButton, Tooltip, Title } from "@mantine/core";
import { SidebarContext } from "../../context/SidebarContext";
import Link from "next/link";
import {
  IconHome2,
  IconUser,
  IconSettings,
  IconMessage2,
  IconSearch,
} from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import { useStyles } from "./SidebarStyle";

const mainLinksArr = [
  { icon: IconHome2, label: "Home" },
  { icon: IconUser, label: "Profile" },
  { icon: IconMessage2, label: "Chat" },
  { icon: IconSearch, label: "Search" },
  { icon: IconSettings, label: "Settings" },
];

export default function Sidebar() {
  const { classes, cx } = useStyles();
  const {
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
    handleActiveLink,
  } = useContext(SidebarContext);

  const mainLinks = mainLinksArr.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionDuration={0}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => handleActive(link.label)}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: link.label === active,
        })}
      >
        <link.icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const linkArray = NavbarLinks[active];
  const links = linkArray.map((link) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: activeLink === link,
      })}
      href="/"
      onClick={(event) => {
        event.preventDefault();
        handleActiveLink(link);
      }}
      key={link}
    >
      {link}
    </Link>
  ));

  return (
    <Navbar className="h-full" width={{ sm: 300 }}>
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
  );
}
