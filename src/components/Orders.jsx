/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, product: "Sofa", quantity: 2, totalPrice: 500, status: "Active", payment: "Paid" },
    { id: 2, product: "Chair", quantity: 4, totalPrice: 200, status: "Pending", payment: "Unpaid" },
    { id: 3, product: "Table", quantity: 1, totalPrice: 300, status: "Inactive", payment: "Paid" },
    { id: 4, product: "Lamp", quantity: 3, totalPrice: 150, status: "Active", payment: "Unpaid" },
    { id: 5, product: "Sofa Set", quantity: 3, totalPrice: 150, status: "Active", payment: "Unpaid" },
    { id: 6, product: "Chair", quantity: 3, totalPrice: 150, status: "Pending", payment: "Unpaid" },
    { id: 7, product: "Table", quantity: 3, totalPrice: 150, status: "Active", payment: "Unpaid" },
    { id: 8, product: "Bed", quantity: 3, totalPrice: 150, status: "Active", payment: "Unpaid" },
    { id: 9, product: "5-seater Sofa", quantity: 3, totalPrice: 150, status: "Active", payment: "Unpaid" },
    { id: 10, product: "Sofa", quantity: 3, totalPrice: 150, status: "Active", payment: "Unpaid" },
    { id: 11, product: "Bed 3", quantity: 3, totalPrice: 150, status: "Active", payment: "Unpaid" },
    { id: 12, product: "Lamp", quantity: 3, totalPrice: 150, status: "Active", payment: "Unpaid" },
    { id: 13, product: "Lamp", quantity: 3, totalPrice: 150, status: "Inactive", payment: "Unpaid" },
    { id: 14, product: "Lamp", quantity: 3, totalPrice: 150, status: "Pending", payment: "Unpaid" },
    { id: 15, product: "Lamp", quantity: 3, totalPrice: 150, status: "Inactive", payment: "Unpaid" },
    { id: 16, product: "Lamp", quantity: 3, totalPrice: 150, status: "Pending", payment: "Unpaid" },
    { id: 17, product: "Lamp", quantity: 3, totalPrice: 150, status: "Pending", payment: "Unpaid" },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Active");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredOrders = orders.filter((order) => {
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
