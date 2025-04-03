import React from "react";
import {
  Text,
  Image,
  Paper,
  Title,
  Button,
  Avatar,
  Divider,
} from "@mantine/core";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/clerk-react";

const Account = () => {
  const user = useUser();

  return (
    <section className="w-full min-h-screen md:flex">
      <SignedOut>
        <div className="w-full min-h-screen flex px-8 text-center flex-col justify-center items-center">
          <Title my="md">You are not Logged In</Title>
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="md:flex-1 px-6 w-full flex lg:items-center justify-end">
          <Paper
            radius="lg"
            withBorder
            p="lg"
            bg="var(--mantine-color-body)"
            className="md:w-[60%] md:h-[56%] mt-12 lg:mt-0"
          >
            <div>
              <Avatar
                src={user.user?.imageUrl}
                w="70%"
                h="52%"
                radius={120}
                mx="auto"
                my="8%"
                className="shadow-md"
                name={user.user?.fullName}
              />
            </div>
            <div>
              <Title ta="center" fw={700} mt="md" className="overflow-ellipsis">
                {user.user?.fullName}
              </Title>
              <Text ta="center" c="dimmed" fz="lg">
                {user.user?.id}
              </Text>{" "}
              <Text ta="center" c="dimmed" fz="lg">
                {user.user?.emailAddresses[0]?.emailAddress}
              </Text>
            </div>
            <div className="mb-10">
              <Button fullWidth mt="xl" size="md">
                Edit profile
              </Button>
            </div>
          </Paper>
        </div>
        <div className="flex-1 flex justify-start items-center lg:pr-44 px-3 rounded-3xl my-4 lg:my-0">
          <Paper
            className="w-full lg:pt-4 lg:pb-6 shadow-xl px-4 md:px-12 bg-gray-100"
            shadow="xs"
            radius="lg"
            p="xl"
          >
            <div>
              <div className="flex flex-col lg:flex-row items-center lg:mb-6">
                <div className="lg:w-1/5 lg:mr-12">
                  <Image src="https://raw.githubusercontent.com/Arhaan-Ali/Udayini/refs/heads/main/src/assets/img02.png" />
                </div>
                <Title fz={60}>0 coins</Title>
              </div>
            </div>
            <div className="flex w-full gap-4 mb-3 mt-12 lg:mt-0">
              <div className="text-lg min-w-max font-semibold lg:text-xl">
                User name
              </div>
              <div className=" text-lg lg:text-xl">{user.user?.username}</div>
            </div>
            <Divider />
            <div className="flex w-full gap-4 mb-3 mt-3">
              <div className="text-lg min-w-max font-semibold lg:text-xl">
                Full name
              </div>
              <div className=" text-lg lg:text-xl">{user.user?.fullName}</div>
            </div>
            <Divider />
            <div className="flex w-full gap-4 mb-3 mt-3">
              <div className="text-lg min-w-max font-semibold lg:text-xl">
                Email
              </div>
              <div className=" text-lg lg:text-xl">
                {user.user?.emailAddresses[0]?.emailAddress}
              </div>
            </div>
            <Divider />
            <div className="flex w-full gap-4 mb-3 mt-3">
              <div className="text-lg min-w-max font-semibold lg:text-xl">
                Phone
              </div>
              <div className=" text-lg lg:text-xl">
                {user.user?.phoneNumbers?.length > 0
                  ? user.user.phoneNumbers[0]?.phoneNumber
                  : "N/A"}
              </div>
            </div>
            <Divider />
            <div className="flex w-full gap-4 mb-3 mt-3">
              <div className="text-lg min-w-max font-semibold lg:text-xl">
                UpdatedAt
              </div>
              <div className=" text-lg lg:text-xl">
                {new Date(user.user?.updatedAt).toLocaleString()}
              </div>
            </div>
            <div className="w-full flex pt-8 lg:mt-4">
              <Button w="100%">Logout</Button>
            </div>
          </Paper>
        </div>
      </SignedIn>
    </section>
  );
};

export default Account;
