import { useDispatch, useSelector } from "react-redux";
import { setSortResult } from "../features/products/productsSlice";

const SortGroup = () => {
  const { sort } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setSortResult(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div>
      <select
        onChange={onChange}
        value={sort}
        name="sort"
        id="sort"
        className="border-none rounded text-center h-12 uppercase text-sm tracking-wider "
      >
        <option value="default">Default</option>

        <option value="price-high-to-low">Price High to Low</option>
        <option value="price-low-to-high">Price Low to High</option>
        <option value="new">Newest First</option>
      </select>
    </div>
  );
};

export default SortGroup;
