import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FileManager from "./pages/FileManager.tsx";
import Debounce from "./pages/Debounce.tsx";
import Pagination from "./pages/Pagination.tsx";
import Lazyload from "./pages/Lazyload.tsx";
import CountdownTimer from "./pages/CountdownTimer.tsx";
import Stopwatch from "./pages/Stopwatch.tsx";
import TrafficLight from "./pages/TrafficLight.tsx";
import Throttle from "./pages/Throttle.tsx";
import InfiniteScroll from "./pages/InfiniteScroll.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/file-manager",
        element: <FileManager />,
      },
      {
        path: "/debounce",
        element: <Debounce />,
      },
      {
        path: "/throttle",
        element: <Throttle />,
      },
      {
        path: "/infinite-scroll",
        element: <InfiniteScroll />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/lazyload",
        element: <Lazyload />,
      },
      {
        path: "/count-down-timer",
        element: <CountdownTimer />,
      },
      {
        path: "/stop-watch",
        element: <Stopwatch />,
      },
      {
        path: "/traffic-light",
        element: <TrafficLight />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
