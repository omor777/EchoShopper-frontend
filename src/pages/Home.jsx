import { Spinner } from "flowbite-react";
import { useGetAllProductsQuery } from "../features/products/productsApi";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { data: products, isLoading, isSuccess } = useGetAllProductsQuery();

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products?.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </div>
  );
};

export default Home;
