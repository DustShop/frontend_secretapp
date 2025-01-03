import HomeCards from "../../HomeCards";

export const Main = () => {

  return (
    <div className="pt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      <HomeCards />
    </div>
  );
}

export default Main