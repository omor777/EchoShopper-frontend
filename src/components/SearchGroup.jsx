import { Button, TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSearchResult } from "../features/products/productsSlice";
const SearchGroup = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchResult(e.target.search.value));
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center mb-5 bg-red-200 h-12 rounded max-w-[300px] overflow-hidden ">
        <input
          type="search"
          name="search"
          placeholder="search..."
          className="border-none outline-none flex-1 h-full pl-5"
        />
        <button
          type="submit"
          className="bg-teal-500 h-full w-14 flex items-center justify-center"
        >
          <IoSearch className="h-6 w-8 text-white" />
        </button>
      </div>
    </form>
  );
};

export default SearchGroup;
