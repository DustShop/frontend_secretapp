import { Heart, House, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import Link from "next/link";
import { ClipLoader } from "react-spinners"; // Biblioteca de spinner (opcional)

export const NavigationBar = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [activePath, setActivePath] = useState(router.pathname); // Ícone ativo

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleNavigation = async (path: string) => {
    setActivePath(path);
    setLoading(true); 
    await router.push(path); 
    setLoading(false); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <ClipLoader color="#E25352" size={50} />
        </div>
      )}

      <div
        className={`fixed md:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="grid h-full max-w-[80%] grid-cols-3 mx-auto font-medium">
          <button
            onClick={() => handleNavigation("/")}
            className="flex flex-col items-center justify-center px-5"
          >
            <House
              color={activePath === "/" ? "#E25352" : "#6a6a6a"}
              className={activePath === "/" ? "text-[#E25352]" : ""}
            />
            <span
              className={`text-sm ${
                activePath === "/"
                  ? "text-[#E25352]"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Home
            </span>
          </button>

          <button
            onClick={() => handleNavigation("/favorites")}
            className="flex flex-col items-center justify-center px-5"
          >
            <Heart
              color={activePath === "/favorites" ? "#E25352" : "#6a6a6a"}
              className={activePath === "/favorites" ? "text-[#E25352]" : ""}
            />
            <span
              className={`text-sm ${
                activePath === "/favorites"
                  ? "text-[#E25352]"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Favorites
            </span>
          </button>

          <button
            onClick={() => handleNavigation("/profile")}
            className="flex flex-col items-center justify-center px-5"
          >
            <User
              color={activePath === "/profile" ? "#E25352" : "#6a6a6a"}
              className={activePath === "/profile" ? "text-[#E25352]" : ""}
            />
            <span
              className={`text-sm ${
                activePath === "/profile"
                  ? "text-[#E25352]"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Profile
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
