import React from 'react'
import { Button, Card, Image, Paper, Text, Title } from "@mantine/core";

const ItemCard = () => {
  return (
    <Paper className='md:w-2/5 lg:w-1/4  mx-4 shadow-md my-4 p-4 border-1 border-gray-300' radius={10}>
      <Image src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" radius={10}/>
      <div className='mt-4'>
      <Title>Title</Title>
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita sed consectetur est temporibus mollitia dolorum sit blanditiis similique delectus facere!</Text>
      <div className=''>
      <Button w="100%"  className='w-full mt-4'>Start learn</Button>
      </div>
      </div>
    </Paper>
  );
}

export default ItemCard
