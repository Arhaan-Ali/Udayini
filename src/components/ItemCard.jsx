import React from "react";
import { Text, Paper, Title, Image, Button } from "@mantine/core";

const ItemCard = ({ imgPath, title, content }) => {
  return (
    <Paper
      className="md:w-2/5 lg:w-1/4  mx-4 shadow-2xl my-4 p-4 border-1 border-gray-300"
      radius={10}
      h={600}
      shadow="lg"
    >
      <div className="min-h-full min-w-full flex flex-col items-center justify-between">
        <div className="">
          <Image src={imgPath} radius={10} h={250} w="100%" />
          <div className="mt-4">
            <Title>{title}</Title>
            <Text mt={10}>{content}</Text>
          </div>
        </div>
          <div className="w-full">
            <Button w="100%" className="w-full">
              Start learn
            </Button>
          </div>
      </div>
    </Paper>
  );
};

export default ItemCard;
