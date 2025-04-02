import React from "react";
import { Burger, Group, Image, Text, Title } from "@mantine/core";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import end_points from "../router/end_points";
import { useDisclosure } from "@mantine/hooks";

const linkItems = [
  {
    label: "Home",
    path: end_points.home,
  },
  {
    label: "Explore",
    path: end_points.explore,
  },
  {
    label: "Account",
    path: end_points.account,
  },
];

const NavigationBar = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <header className="w-full h-max shadow md:flex items-center justify-between px-4 md:px-10 py-3">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-max gap-x-4">
          <Image src={logo} className="max-w-10" />
          <Title>Udayini</Title>
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
          {linkItems.map((item, index) => {
            return (
              <NavLink to={item.path} key={index} className="text-center mx-12">
                <Text>{item.label}</Text>
              </NavLink>
            );
          })}
        </Group>
        <div className="ml-12 md:w-max">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
