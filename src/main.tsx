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
import StarRating from "./pages/StarRating.tsx";
import Tab from "./pages/Tab.tsx";
import AutoSuggest from "./pages/AutoSuggest.tsx";
import AccordionPage from "./pages/Accordion.tsx";
// import { lazy, Suspense } from "react";

// const FileManager = lazy(() => import("./pages/FileManager.tsx"));
// const Debounce = lazy(() => import("./pages/Debounce.tsx"));
// const Pagination = lazy(() => import("./pages/Pagination.tsx"));
// const Lazyload = lazy(() => import("./pages/Lazyload.tsx"));
// const CountdownTimer = lazy(() => import("./pages/CountdownTimer.tsx"));
// const Stopwatch = lazy(() => import("./pages/Stopwatch.tsx"));
// const TrafficLight = lazy(() => import("./pages/TrafficLight.tsx"));
// const Throttle = lazy(() => import("./pages/Throttle.tsx"));
// const InfiniteScroll = lazy(() => import("./pages/InfiniteScroll.tsx"));
// const StarRating = lazy(() => import("./pages/StarRating.tsx"));
// const Tab = lazy(() => import("./pages/Tab.tsx"));

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
      {
        path: "/star-rating",
        element: <StarRating />,
      },
      {
        path: "/tabs",
        element: <Tab />,
      },
      {
        path: "/auto-suggest",
        element: <AutoSuggest />,
      },
      {
        path: "/accordion",
        element: <AccordionPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <div>
  //   <Suspense fallback={<div>Loading...</div>}>
  <RouterProvider router={router} />
  //   </Suspense>
  // </div>
);
