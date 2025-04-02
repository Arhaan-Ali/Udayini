import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// core styles are required for all packages
import '@mantine/core/styles.css';

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

import "./index.css";
import router from "./router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
