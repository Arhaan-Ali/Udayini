import React from "react";
import CarouselField from "../components/CarouselField";
import { Container, Title, Text, Button, Group } from "@mantine/core";
import ItemCard from "../components/ItemCard";

const Home = () => {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <CarouselField />
      <Container className="text-center my-12 lg:my-0"  px={20}>
        <Title order={3}>Learn a skill, Or share a one</Title>
        <Title>Traditional Taught, Futures Built</Title>
        <Text fs={30}>Earn Ratna coins for teaching a skill and use them to learn a new one or just cash out !</Text>
        <Button className="my-8" size="lg">Learn a new skill</Button>
      </Container>
      <div className="w-full h-max flex flex-wrap items-center lg:justify-center">
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
      </div>
    </section>
  );
};

export default Home;
