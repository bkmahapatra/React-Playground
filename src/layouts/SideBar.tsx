import { NavLink } from "react-router-dom";

const SideBar = () => {
  const pageRoutes = [
    { label: "File Manager", link: "/file-manager" },
    { label: "Pagination", link: "/pagination" },
    { label: "Lazyload", link: "/lazyload" },
    { label: "Debounce", link: "/debounce" },
    { label: "Throttle", link: "/throttle" },
    { label: "Infinite scroll", link: "/infinite-scroll" },
    { label: "Countdown Timer", link: "/count-down-timer" },
    { label: "Traffic Light", link: "/traffic-light" },
    { label: "Star Rating", link: "/star-rating" },
    { label: "Tabs", link: "/tabs" },
    { label: "Modal", link: "/modal" },
    { label: "Caraousal", link: "/caraousal" },
    { label: "Slider", link: "/slider" },
    { label: "Stopwatch", link: "/stop-watch" },
    { label: "Auto complete search", link: "/auto-suggest" },
  ];
  return (
    <nav className="bg-gray-400 h-screen p-2 w-56 absolute top-0 left-0">
      <ul>
        {pageRoutes.map((item, index) => {
          return (
            <li key={index} className="bg-slate-800 p-1 my-1 rounded-sm">
              <NavLink to={item.link}>{item.label}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
