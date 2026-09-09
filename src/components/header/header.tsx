import SearchInput from "./searchInput";
import Themetoggle from "./themetoggle";

function Header() {
  return (
    <div className="flex items-center mt-4 max-[630px]:flex-col-reverse ">
      <Themetoggle />
      <SearchInput />
    </div>
  );
}

export default Header;
