import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { StepProvider } from "@providers";

import { MainPage } from "@pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <StepProvider>
        <MainPage />,
      </StepProvider>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
