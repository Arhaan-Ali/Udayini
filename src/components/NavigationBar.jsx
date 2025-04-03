import React from "react";
import { Burger, Group, Image, Text, Title, Drawer, Avatar } from "@mantine/core";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import { useDisclosure } from "@mantine/hooks";
import linkItems from "../constant/navigation_links";
import end_points from "../router/end_points";

const navItems = linkItems.map((item, index) => {
  return (
    <NavLink
      to={item.path}
      key={index}
      className={({ isActive }) =>
        isActive
          ? `bg-black px-6 py-2 mx-8 rounded-lg text-white font-extrabold`
          : `text-center px-6 py-1 mx-8 hover:border-2 rounded-md`
      }
    >
      <Text>{item.label}</Text>
    </NavLink>
  );
});

const NavigationBar = () => {
  const navigate = useNavigate();
  const [opened, { toggle, close }] = useDisclosure();
  return (
    <header className="w-full h-max shadow md:flex items-center justify-between px-4 md:px-10 py-3">
      <Drawer
        opened={opened}
        onClose={close}
        title={<Title className="text-xl">Udayini</Title>}
        size="sm"
        h="100%"
      >
        <div className="w-full h-full flex flex-col items-center justify-between">
          <div className="w-full h-max flex flex-1/2 flex-col gap-y-4 my-8">
            {linkItems.map((item) => {
              return (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-black text-white" : ""
                    } w-full inline text-center py-4 text-lg font-bold rounded-lg hover:border-2`
                  }
                  onClick={close}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
          <div className="flex-1/2">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: "40px",
                      height: "40px",
                    },
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </Drawer>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-max gap-x-4">
          <Image src={logo} className="max-w-10" />
          <Title
            className="cursor-pointer"
            onClick={() => navigate(end_points.home)}
          >
            Udayini
          </Title>
        </div>
        <Group hiddenFrom="sm">
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </Group>
      </div>
      <div
        className={`${
          opened ? "h-40" : "hidden"
        } min-w-max md:flex items-center justify-between`}
      >
        <Group justify="space-between" gap="xs" grow className="mt-12 md:mt-0">
          {navItems}
        </Group>
        <div className="ml-12 md:w-max">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "40px",
                    height: "40px",
                  },
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
