import React, { useState } from "react";
import orders from "../data/orders.json";
import { HiCalendar, HiUser } from "react-icons/hi";
import { FaMoneyBillWave, FaClipboardList } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  const [searchDate, setSearchDate] = useState("");

  // Filter berdasarkan tanggal
  const filteredOrders = orders.filter((order) => {
    return searchDate ? order.orderDate.startsWith(searchDate) : true;
  });

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-slate-100">
     
    <PageHeader title="Orders List">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Add Orders
      </button>
    </PageHeader>
 
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Order List</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="p-3 border border-gray-300 rounded-full w-full md:max-w-xs shadow-md focus:outline-none
           focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredOrders.map((order, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl shadow-2xl border-2 ${
              order.status === "Completed"
                ? "bg-green-100 border-green-300"
                : order.status === "Pending"
                ? "bg-yellow-100 border-yellow-300"
                : "bg-red-100 border-red-300"
            } hover:scale-105 transform transition-transform duration-300 hover:shadow-2xl`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`p-4 rounded-full mb-4 ${
                order.status === "Completed"
                  ? "bg-green-400"
                  : order.status === "Pending"
                  ? "bg-yellow-400"
                  : "bg-red-400"
              }`}>
                <FaClipboardList className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {order.orderId}
              </h3>
              <div className="text-gray-600 text-sm space-y-2">
                <div className="flex items-center justify-center">
                  <HiUser className="mr-2 text-blue-500 text-lg" /> {order.customerName}
                </div>
                <div className="flex items-center justify-center">
                  <HiCalendar className="mr-2 text-indigo-500 text-lg" /> {order.orderDate}
                </div>
                <div className="flex items-center justify-center">
                  <FaMoneyBillWave className="mr-2 text-green-500 text-lg" /> ${order.totalPrice}
                </div>
                <div className="flex items-center justify-center font-semibold">
                  Status: {order.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}