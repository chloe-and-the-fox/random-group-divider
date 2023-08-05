import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ConfigProvider, StepProvider } from "@providers";

import { MainPage } from "@pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <StepProvider>
        <ConfigProvider>
          <MainPage />,
        </ConfigProvider>
      </StepProvider>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
