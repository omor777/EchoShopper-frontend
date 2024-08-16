import { Checkbox, Drawer, HR, Label, Sidebar } from "flowbite-react";
import { useState } from "react";
import { GiRunningShoe } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  setBrandsResult,
  setCategoriesResult,
} from "../../features/products/productsSlice";

const categories = [
  {
    id: 1,
    label: "electronics",
    value: "Electronics",
  },
  {
    id: 2,
    label: "furniture",
    value: "Furniture",
  },
  {
    id: 3,
    label: "accessories",
    value: "Accessories",
  },
  {
    id: 4,
    label: "footwear",
    value: "Footwear",
  },
  {
    id: 5,
    label: "home-appliances",
    value: "Home Appliances",
  },
];

const brands = [
  {
    id: 1,
    label: "comfortPlus",
    value: "ComfortPlus",
  },
  {
    id: 2,
    label: "sleepWell",
    value: "SleepWell",
  },
  {
    id: 3,
    label: "techWave",
    value: "TechWave",
  },
  {
    id: 4,
    label: "gizmoGear",
    value: "GizmoGear",
  },
  {
    id: 5,
    label: "nextPlay",
    value: "NextPlay",
  },
  {
    id: 6,
    label: "voltPlus",
    value: "VoltPlus",
  },
  {
    id: 7,
    label: "luxWallet",
    value: "LuxWallet",
  },
  {
    id: 8,
    label: "sportFlex",
    value: "SportFlex",
  },
  {
    id: 9,
    label: "urbanStride",
    value: "UrbanStride",
  },
  {
    id: 10,
    label: "coolBreeze",
    value: "CoolBreeze",
  },
];

const SidebarComponent = () => {
  const dispatch = useDispatch();

  const handleCategoriesChange = (e) => {
    dispatch(
      setCategoriesResult({ checked: e.target.checked, value: e.target.value })
    );
  };

  const handleBrandChange = (e) => {
    dispatch(
      setBrandsResult({
        checked: e.target.checked,
        value: e.target.value,
      })
    );
  };

  return (
    <div>
      <Sidebar className="w-full">
        <Sidebar.Logo className="justify-center ">Filter</Sidebar.Logo>
        <HR className="my-6" />

        <Sidebar.Items className="">
          <Sidebar.ItemGroup>
            <Sidebar.Collapse open={true} label="Brands">
              {brands.map(({ id, label, value }) => (
                <Sidebar.Item key={id}>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      onChange={handleBrandChange}
                      value={value}
                      id={label}
                    />
                    <Label htmlFor={label} className="select-none">
                      {value}
                    </Label>
                  </div>
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Collapse label="Categories" open={true}>
              {categories.map(({ id, label, value }) => (
                <Sidebar.Item key={id}>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      onChange={handleCategoriesChange}
                      id={id}
                      value={value}
                    />
                    <Label htmlFor={id} className="select-none block">
                      {value}
                    </Label>
                  </div>
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
