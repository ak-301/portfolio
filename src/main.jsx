import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { Layout } from "./components/layout/index.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </StrictMode>
);
