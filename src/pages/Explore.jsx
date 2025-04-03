import React from "react";
import { Button, Group, Input, Title } from "@mantine/core";

import images from "../constant/image_links";
import ItemCard from "../components/ItemCard";

const Explore = () => {
  return (
    <section className="w-full min-h-screen overflow-y-scroll flex flex-col items-center pt-12">
      <Title>Explore new things</Title>
      <div className="px-4 lg:px-16 mt-8 flex w-full justify-between items-center ">
        <div className="flex w-full min-h-full m-4 lg:mr-12">
          <Input
            variant="filled"
            radius="md"
            placeholder="Input component"
            w="100%"
            h="100%"
          />
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </div>
      <div className="w-full h-max flex flex-wrap items-center lg:justify-center mt-12">
        {images.map((image) => {
          return (
            <ItemCard
              imgPath={image.link}
              title={image.title}
              content={image.content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Explore;
