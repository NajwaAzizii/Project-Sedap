import React, { useState } from "react";
import customers from "../data/customers.json";
import { HiMail, HiPhone, HiUser } from "react-icons/hi";
import { FaMedal } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [searchName, setSearchName] = useState("");
  const [selectedLoyalty, setSelectedLoyalty] = useState("");

  const filteredCustomers = customers.filter((customer) => {
    const matchesName = customer.customerName
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesLoyalty = selectedLoyalty
      ? customer.loyalty === selectedLoyalty
      : true;
    return matchesName && matchesLoyalty;
  });

  const getMedalStyle = (loyalty) => {
    if (loyalty === "Gold") return { color: "var(--color-kuning)" };
    if (loyalty === "Silver") return { color: "var(--color-teks-samping)" };
    if (loyalty === "Bronze") return { color: "var(--color-merah)" };
    return { color: "var(--color-teks-samping)" };
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-slate-100">
    <PageHeader title="Customers List">
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
        Add Customer
      </button>
    </PageHeader>
  
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Customer Directory
      </h2>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
        <input
          type="text"
          placeholder="🔍 Search by Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="p-3 border border-gray-300 rounded-full w-full md:max-w-md shadow-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          className="p-3 border border-gray-300 rounded-full w-full md:max-w-xs shadow-md 
          focus:outline-none focus:ring-2 focus:ring-green-500"
          value={selectedLoyalty}
          onChange={(e) => setSelectedLoyalty(e.target.value)}
        >
          <option value="">🔥 All Loyalty Levels</option>
          <option value="Bronze">🥉 Bronze</option>
          <option value="Silver">🥈 Silver</option>
          <option value="Gold">🥇 Gold</option>
        </select>
      </div>

      {/* Customer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCustomers.map((customer, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl shadow-2xl border-2 ${
              customer.loyalty === "Gold"
                ? "bg-yellow-50 border-yellow-300"
                : customer.loyalty === "Silver"
                ? "bg-gray-50 border-gray-300"
                : "bg-orange-50 border-orange-300"
            } hover:scale-105 transform transition-transform duration-300 hover:shadow-2xl`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-tr from-green-400 to-blue-500 p-4 rounded-full mb-4">
                <HiUser className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {customer.customerName}
              </h3>
              <div className="text-gray-600 text-sm space-y-2">
                <div className="flex items-center justify-center">
                  <HiMail className="mr-2 text-lg text-blue-500" />
                  {customer.email}
                </div>
                <div className="flex items-center justify-center">
                  <HiPhone className="mr-2 text-lg text-green-500" />
                  {customer.phone}
                </div>
                <div className="flex items-center justify-center">
                  <FaMedal className="mr-2 text-lg" style={getMedalStyle(customer.loyalty)} />
                  {customer.loyalty}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
