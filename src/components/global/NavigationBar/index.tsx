import { Heart, House, User } from "lucide-react";
import { useState, useEffect } from "react";

export const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setIsVisible(false);
      } else {
        // Scroll up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`fixed md:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-white dark:border-gray-200 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid h-full max-w-[80%] grid-cols-3 mx-auto font-medium">
        <button
          type="button"
          onClick={() => setActiveTab("home")}
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <House
            color={activeTab === "home" ? "#2563eb" : "#6a6a6a"}
            className={`${
              activeTab === "home" ? "text-blue-600" : ""
            } group-hover:text-blue-600`}
          />
          <span
            className={`text-sm ${
              activeTab === "home"
                ? "text-blue-600"
                : "text-gray-500 dark:text-gray-400"
            } group-hover:text-blue-600 dark:group-hover:text-blue-500`}
          >
            Home
          </span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("favorites")}
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <Heart
            color={activeTab === "favorites" ? "#2563eb" : "#6a6a6a"}
            className={`${
              activeTab === "favorites" ? "text-blue-600" : ""
            } group-hover:text-blue-600`}
          />
          <span
            className={`text-sm ${
              activeTab === "favorites"
                ? "text-blue-600"
                : "text-gray-500 dark:text-gray-400"
            } group-hover:text-blue-600 dark:group-hover:text-blue-500`}
          >
            Favorites
          </span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("profile")}
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <User
            color={activeTab === "profile" ? "#2563eb" : "#6a6a6a"}
            className={`${
              activeTab === "profile" ? "text-blue-600" : ""
            } group-hover:text-blue-600`}
          />
          <span
            className={`text-sm ${
              activeTab === "profile"
                ? "text-blue-600"
                : "text-gray-500 dark:text-gray-400"
            } group-hover:text-blue-600 dark:group-hover:text-blue-500`}
          >
            Profile
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
