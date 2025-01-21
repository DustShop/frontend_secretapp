import { t } from "i18next";

import { ChooseButtonsProps } from "./types";
import { Button } from "../../ui/button";

export const MainFilterButtons = ({ selected, setSelected }: ChooseButtonsProps) => {
  return (
    <nav className="md:block mb-4">
      <ul className="flex items-center justify-center gap-6 text-black">
        <Button
          onClick={() => setSelected("Escorts")}
          className={`transition duration-300 ${
            selected === "Escorts"
              ? "bg-gray-100 rounded-lg font-bold"
              : "hover:bg-gray-100 hover:rounded-lg"
          }`}
        >
          {t("header.navbar.options.escorts")}
        </Button>
        <Button
          onClick={() => setSelected("Nighthouses")}
          className={`transition duration-300 ${
            selected === "Nighthouses"
              ? "bg-gray-100 rounded-lg font-bold"
              : "hover:bg-gray-100 hover:rounded-lg"
          }`}
        >
          {t("header.navbar.options.nighthouses")}
        </Button>
      </ul>
    </nav>
  );
};

export default MainFilterButtons;
