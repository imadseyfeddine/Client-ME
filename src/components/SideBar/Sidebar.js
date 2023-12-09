import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { CiMenuFries } from "react-icons/ci";
import { RiMenu5Line } from "react-icons/ri";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo/logo_blanc.png";

// Import sideBarItems
import { sideBarItems } from "./SidebarListItems";

const Sidebar = () => {
  //retrieve the initial open state from local sorage or default to 0
  const [open, setOpen] = React.useState(0);
  const [openSidebar, setOpenSidebar] = useState(true);

  useEffect(() => {
    // Save the open state to local storage whenever it changes
    localStorage.setItem("sidebarOpenState", openSidebar);
  }, [openSidebar]);

  const handleToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Card
        className={`h-screen w-full max-w-[18rem] rounded-md p-2 shadow-md shadow-green ${
          openSidebar ? "" : "max-w-[3.5rem]  "
        }`}
      >
        <div className="absolute top-1 right-4 cursor-pointer">
          {openSidebar ? (
            <CiMenuFries
              onClick={handleToggle}
              className="h-5 w-5 mt-4 text-blue-green"
            />
          ) : (
            <RiMenu5Line
              onClick={handleToggle}
              className="h-5 w-5 mt-6 text-blue-green"
            />
          )}
        </div>
        <div className={`mb-2 p-4 ${openSidebar ? "mt-2" : "mt-6 "}`}>
          <Typography
            variant="h5"
            color="gray-500"
            className={` ${openSidebar ? "" : "hidden"}`}
          >
            Client ME
          </Typography>
        </div>
        <img src={logo} alt="logo" className="max-w-[8rem]" />
        <hr className={`my-2  border-green ${openSidebar ? "" : "hidden"}`} />

        <List>
          {sideBarItems.map((item, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === index + 1 ? "rotate-180" : ""
                  } ${openSidebar ? "" : "hidden"}`}
                />
              }
            >
              <div className="flex ml-1">
                <ListItemPrefix
                  color="green"
                  className={` ${openSidebar ? "" : " mt-28 "}`}
                >
                  {item.icon}
                </ListItemPrefix>
                <ListItem
                  className={`p-0 ml-1 ${openSidebar ? "" : "hidden "}`}
                  selected={open === index + 1}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(index + 1)}
                    className={`border-b-0 p-2 ${
                      openSidebar ? "" : "border-hidden "
                    }`}
                  >
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      {item.itemName}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
              </div>
              <AccordionBody className="py-0">
                <List className="p-0">
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem
                      key={subIndex}
                      className={` ${openSidebar ? "" : "hidden"}`}
                    >
                      <ListItemPrefix>
                        <ChevronRightIcon
                          color="green"
                          strokeWidth={3}
                          className="h-3 w-5"
                        />
                      </ListItemPrefix>
                      {subItem}
                    </ListItem>
                  ))}
                </List>
              </AccordionBody>
            </Accordion>
          ))}
        </List>
      </Card>
    </div>
  );
};

export default Sidebar;
