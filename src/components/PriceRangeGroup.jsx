
import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { setPriceRangeResult } from "../features/products/productsSlice";

const PriceRangeGroup = () => {
  const [priceRange, setPriceRange] = useState([500, 800]);

  const dispatch = useDispatch();

  const handleInputChange = (e, index) => {
    const value = parseFloat(e.target.value);
    if (index === 1) {
      setPriceRange((prev) => {
        return [value, prev[1]];
      });
    } else {
      setPriceRange((prev) => {
        return [prev[0], value];
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPriceRangeResult(priceRange));
  };

  return (
    <div>
      <p className="text-sm mb-3 text-gray-700">Price range</p>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4 gap-5">
          <TextInput
            onChange={(e) => handleInputChange(e, 1)}
            value={priceRange[0]}
            min={20}
            max={1500}
            type="number"
            name="min"
          />
          <TextInput
            onChange={(e) => handleInputChange(e, 2)}
            value={priceRange[1]}
            min={20}
            max={1500}
            type="number"
            name="max"
            id="max"
          />
        </div>

        <Button type="summit" size="sm" className=" mx-auto">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PriceRangeGroup;
