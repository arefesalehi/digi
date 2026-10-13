import { useEffect, useState } from "react";
import { getAllProducts } from "../service/product.service";

export const useProducts = (limit = 10) => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await getAllProducts({ page, limit });
      setProducts(res?.data?.products || []);
      setPagination(res?.data?.pagination || null);
    } catch (err) {
        console.log(err);

      setError("خطا در دریافت محصولات");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            fetchProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  return {
    products,
    pagination,
    page,
    setPage,
    isLoading,
    error,
    refetch: fetchProducts
  };
};
