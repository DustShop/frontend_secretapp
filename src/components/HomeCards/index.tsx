/* eslint-disable @next/next/no-img-element */
import { Heart } from "lucide-react";

export const HomeCards = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 p-3 flex items-center justify-between w-full">
        <div className="z-5"></div>
        <div className="w-[28px] h-[28px] flex items-center justify-center">
          <button
            type="button"
            className="relative hover:opacity-80 transition cursor-pointer z-[5]"
          >
            <Heart size={28} />
          </button>
        </div>
      </div>
      <a
        className="col-span-1 cursor-pointer"
        href="#"
      >
        <div className="flex flex-col gap-1 w-full">
          <div className="overflow-hidden md:rounded-xl rounded-md">
            <div className="aspect-[1/0.95] relative bg-gray-100">
              <img
                alt="test"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="transition duration-300 opacity-100 scale-100 object-cover"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: "transparent",
                }}
                sizes="100vw"
                src=""
              />
            </div>
          </div>
          <span className="text-black text-[16px] mt-[4px]">
            José Eduardo
          </span>
          <span className="font-light text-neutral-500 text-sm">Cravinhos, BR</span>
          <div className="flex flex-row items-baseline gap-1">
            <span className="font-bold text-[#444] text-[14px]">$12</span>
            <span className="text-[#444]">night</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HomeCards;
