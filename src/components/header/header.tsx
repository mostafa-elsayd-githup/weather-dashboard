import SearchInput from "./searchInput";
import Themetoggle from "./themetoggle";

function Header() {
  return (
    <div className="grid items-center grid-cols-12 mt-4 ">
     <div className="col-span-2 md:col-span-2">
      <Themetoggle />
     </div>
     <div className="col-span-10 md:col-span-10">
      <SearchInput />
     </div>
    </div>
  );
}

export default Header;
