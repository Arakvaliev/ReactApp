import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StyledEngineProvider } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StyledEngineProvider>,
);
