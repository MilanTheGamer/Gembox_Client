import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import { darkModeAtom } from "../../atoms";
import {
  CreateIcon,
  HistoryIcon,
  HomeIcon,
  NotificationIcon,
  ThemeIcon,
} from "../../components/Icons";
import { Wrapper } from "./styled";

export default function NavBar() {
  const { pathname } = useRouter();
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const navItems = [
    {
      title: "Home",
      type: "page",
      route: "/home",
      icon: <HomeIcon isActive={pathname === "/home"} />,
    },
    {
      title: "Notifications",
      type: "page",
      route: "/notifications",
      icon: <NotificationIcon isActive={pathname === "/notifications"} />,
    },
    {
      title: "Create",
      type: "page",
      route: "/create",
      icon: <CreateIcon isActive={pathname === "/create"} />,
    },
    {
      title: "History",
      type: "page",
      route: "/history",
      icon: <HistoryIcon isActive={pathname === "/history"} />,
    },
    {
      title: "Theme",
      type: "toggle",
      icon: <ThemeIcon isDark={darkMode} />,
    },
  ];

  return (
    <Wrapper>
      <div className="container">
        {navItems.map((item) => {
          return (
            <div key={item.title}>
              {item.type === "page" ? (
                <Link href={`${item.route}`}>
                  <a>{item.icon}</a>
                </Link>
              ) : (
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  style={{ border: "none", background: "transparent" }}
                >
                  {item.icon}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
