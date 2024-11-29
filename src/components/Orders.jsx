import { useSelector } from "react-redux";
import { useState } from "react";
import "./Orders.css";

const Orders = () => {
  const allOrders = useSelector((state) => state.orders.orders);
  const [search, setSearch] = useState(""); // Search term state
  const [filter, setFilter] = useState("Active"); // Filter state
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const itemsPerPage = 8; // Items per page

  const handleSearchChange = (e) => {
    setSearch(e.target.value.trim()); // Trim search input to remove extra spaces
    setCurrentPage(1); // Reset to the first page after search
  };

  // Filtered Orders based on search and status filter
  const filteredOrders = allOrders.filter((order) => {
    const productMatch = order.product.toLowerCase().includes(search.toLowerCase());
    const statusMatch = filter === "All" || order.status === filter;
    return productMatch && statusMatch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update the current page
  };

  return (
    <div className="orders-container px-4">
      <h2 className="font-bold text-2xl mt-16 mb-8  text-blue-500">Orders</h2>
      <div className="orders-header ">
        {/* Search Input */}
        <input
          type="text"
          className="form-control "
          placeholder="Search by product name"
          value={search}
          onChange={handleSearchChange}
        />

        {/* Filter Buttons */}
        <div className="btn-group mt-6">
          {["Active", "Inactive", "Pending", "All"].map((status) => (
            <button
              key={status}
              className={`btn btn-${filter === status ? "primary" : "outline-primary"}`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>${order.totalPrice.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>{order.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* No Orders Found Message */}
      {paginatedOrders.length === 0 && <p className="text-center">No orders found.</p>}

      {/* Pagination Controls */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`btn btn-${currentPage === index + 1 ? "primary" : "outline-primary"}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Orders;
