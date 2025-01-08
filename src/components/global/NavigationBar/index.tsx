import { Heart, House, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const NavigationBar = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed md:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid h-full max-w-[80%] grid-cols-3 mx-auto font-medium">
        <Link
          href="/"
          className="flex flex-col items-center justify-center px-5"
        >
          <House
            color={router.pathname === "/" ? "#2563eb" : "#6a6a6a"}
            className={router.pathname === "/" ? "text-blue-600" : ""}
          />
          <span
            className={`text-sm ${
              router.pathname === "/"
                ? "text-blue-600"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            Home
          </span>
        </Link>
        <Link
          href="/favorites"
          className="flex flex-col items-center justify-center px-5"
        >
          <Heart
            color={router.pathname === "/favorites" ? "#2563eb" : "#6a6a6a"}
            className={router.pathname === "/favorites" ? "text-blue-600" : ""}
          />
          <span
            className={`text-sm ${
              router.pathname === "/favorites"
                ? "text-blue-600"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            Favorites
          </span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center justify-center px-5"
        >
          <User
            color={router.pathname === "/profile" ? "#2563eb" : "#6a6a6a"}
            className={router.pathname === "/profile" ? "text-blue-600" : ""}
          />
          <span
            className={`text-sm ${
              router.pathname === "/profile"
                ? "text-blue-600"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
