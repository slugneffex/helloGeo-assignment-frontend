import { useState, useEffect } from 'react';
import UserTable from '../components/UserTable';
import Pagination from '../components/Pagination';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      const offset = (page - 1) * limit;
      const query = new URLSearchParams({
        search,
        filter,
        limit,
        offset,
      }).toString();

      try {
        const response = await fetch(`http://localhost:3000/api/users?${query}`);
        const data = await response.json();

        setUsers(data.users);
        setTotalPages(Math.ceil(data.total / limit));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [search, filter, page]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md my-5">
      <h1 className="text-3xl font-semibold mb-6 text-gray-700">User Management</h1>
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search by username"
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Filter by email"
          value={filter}
          onChange={handleFilter}
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <UserTable users={users} />
      <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}
