import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import Home from "./home/Home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Home />
    </Provider>
  </StrictMode>
);
