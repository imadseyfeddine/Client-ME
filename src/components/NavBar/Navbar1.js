import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Sidebar from "../SideBar/Sidebar";
import { IoNotifications } from "react-icons/io5";
import logo from "../../assets/logo/logo_blanc.png";

const Navbar1 = () => {
  const storedSidebarState = localStorage.getItem("sidebarOpenState");
  console.log("sidebar state heree :",storedSidebarState)


  return (
    <div className="flex  max-h-[768px] max-w">
        <Sidebar />
      <Navbar className="sticky top-0 z-10 h-[4rem] max-w-full rounded-none ">
        {storedSidebarState ? null : (
          <img src={logo} alt="logo" className="max-w-[7rem]" />
        )}
           <IoNotifications className="text-black text-lg absolute top-6 right-56 "/>
            <div className="absolute top-4 right-5 gap-x-1">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                color="green"
              >
                <span>Log Out</span>
              </Button>
          </div>
      </Navbar>
    </div>
  );
};
export default Navbar1;
