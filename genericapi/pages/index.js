import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import ScreenComponent from "../components/screenComponent/ScreenComponent";
import { useState, useEffect, useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { useUser } from "@auth0/nextjs-auth0";
import Timeline from "./screens/Timeline";
import Blank from "./screens/Blank";
import Gallery from "./screens/Gallery";
import Profile from "./screens/Profile";

import SkyScraperAd from "../components/skyscraperad/SkyScraperAd";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const { activeLink } = useContext(SidebarContext);

  const selectScreen = (activeLink) => {
    switch (activeLink) {
      case "Timeline":
        return <Timeline />;
        break;
      case "Information":
        return <Profile />;
        break;
      case "Posts":
        return <Blank />;
        break;
      case "Gallery":
        return <Gallery />;
        break;
    }
  };

  useEffect(() => {
    if (isLoading === false) {
      if (!user || error) {
        router.push("/Signin");
      }
    }
  }, [isLoading, user, error, router]);

  return (
    <div className="bg-red-200 w-screen h-full overflow-y-clip flex">
      <Sidebar />
      <ScreenComponent>
        {selectScreen(activeLink)}
        <SkyScraperAd
          url={
            "https://static.wikia.nocookie.net/sonic/images/b/b6/Chao_In_Space_HD.jpg/revision/latest?cb=20190506131521"
          }
        />
      </ScreenComponent>
    </div>
  );
}
