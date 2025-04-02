import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Group, Title, Text } from "@mantine/core";

import linkItems from "../constant/navigation_links";
import end_points from "../router/end_points";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="md:flex text-center px-12 items-center justify-between border-t-[1px] border-gray-200 py-6">
      <Title
        className="cursor-pointer"
        onClick={() => navigate(end_points.home)}
      >
        Udayini
      </Title>
      <Group className="my-6">
        {linkItems.map((item, index) => {
          return (
            <NavLink to={item.path} key={index} className="text-center mx-4">
              <Text>{item.label}</Text>
            </NavLink>
          );
        })}
      </Group>
    </footer>
  );
};

export default Footer;
