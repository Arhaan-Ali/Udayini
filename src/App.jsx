import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";

import conf from "./constant/constants";
import { Outlet } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import theme from "./theme/theme";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

if (!conf.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const App = () => {
  return (
    <ClerkProvider publishableKey={conf.VITE_CLERK_PUBLISHABLE_KEY}>
      <MantineProvider theme={theme}>
        <section className="w-full h-max flex flex-col">
          <NavigationBar />
          <div className='w-full min-h-screen'>
            <Outlet />
          </div>
          <Footer />
        </section>
      </MantineProvider>
    </ClerkProvider>
  );
};

export default App;
