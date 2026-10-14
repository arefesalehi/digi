import { useEffect, useState } from "react";
import { getAllUsers } from "../service/user.service";

export const useUsers = (limit = 10) => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await getAllUsers({ page, limit });
      setUsers(res?.data?.users || []);
      setPagination(res?.data?.pagination || null);
    } catch (err) {
        console.log(err);

      setError("خطا در دریافت کاربران");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            fetchUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  return {
    users,
    pagination,
    page,
    setPage,
    isLoading,
    error,
    refetch: fetchUsers
  };
};
