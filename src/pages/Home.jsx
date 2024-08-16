import { Pagination, Spinner } from "flowbite-react";
import { useGetAllProductsQuery } from "../features/products/productsApi";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import SearchGroup from "../components/SearchGroup";
import { useSelector } from "react-redux";
import SortGroup from "../components/SortGroup";

const Home = () => {
  const [page, setPage] = useState(1);
  const { search, sort, categories,brands } = useSelector((state) => state.product);

  const { data, isLoading, isSuccess } = useGetAllProductsQuery(
    {
      page,
      search,
      sort,
      categories,
      brands
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  // console.log(categories);

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
      <div className="flex flex-col md:flex-row items-center justify-between flex-wrap mb-6 gap-4 ">
        <SearchGroup />
        <SortGroup />
      </div>
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
