import { Pagination, Spinner } from "flowbite-react";
import { useGetAllProductsQuery } from "../features/products/productsApi";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import SearchGroup from "../components/SearchGroup";
import { useSelector } from "react-redux";

const Home = () => {
  const [page, setPage] = useState(1);
  const { search } = useSelector((state) => state.product);

const { data, isLoading, isSuccess } = useGetAllProductsQuery({ page,search });

  const onPageChange = (page) => {
    setPage(page);
  };

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div>
      <SearchGroup />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {data?.products?.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
      <div className="flex overflow-x-auto sm:justify-center my-6">
        <Pagination
          currentPage={page}
          totalPages={data?.totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Home;
