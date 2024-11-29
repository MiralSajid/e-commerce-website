import { useSelector } from "react-redux";
import { useState } from "react";
import "./Orders.css";

const Orders = () => {
  const allOrders = useSelector((state) => state.orders.orders);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Active");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredOrders = allOrders.filter((order) => {
    return (
      order.product.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || order.status === filter)
    );
  });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      <div className="orders-header">
        <input
          type="text"
          className="form-control"
          placeholder="Search by product name"
          value={search}
          onChange={handleSearchChange}
        />
        <div className="btn-group">
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
      {paginatedOrders.length === 0 && <p className="text-center">No orders found.</p>}
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
