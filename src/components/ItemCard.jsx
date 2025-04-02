import React from "react";
import { Text, Paper, Title, Image, Button } from "@mantine/core";

const ItemCard = ({ imgPath, title, content }) => {
  return (
    <Paper
      className="md:w-2/5 lg:w-1/4  mx-4 shadow-md my-4 p-4 border-1 border-gray-300"
      radius={10}
    >
      <Image src={imgPath} radius={10} />
      <div className="mt-4">
        <Title>{title}</Title>
        <Text>{content}</Text>
        <div className="">
          <Button w="100%" className="w-full mt-4">
            Start learn
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default ItemCard;
