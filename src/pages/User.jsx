import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader";

export default function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error("Gagal ambil data user.", err));
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-green-100">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        Daftar Pengguna
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => {
          const bgColor =
            user.gender === "male"
              ? "bg-blue-50 border-blue-200"
              : user.gender === "female"
              ? "bg-pink-50 border-pink-200"
              : "bg-gray-50 border-gray-200";

          return (
            <div
              key={user.id}
              className={`rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border ${bgColor} hover:bg-gray-200`}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 flex justify-center items-center mx-auto">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800 text-center">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-sm text-gray-600 text-center">{user.email}</p>

              <div className="flex justify-center gap-3 mt-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.gender === "male"
                      ? "bg-blue-200 text-blue-800"
                      : user.gender === "female"
                      ? "bg-pink-200 text-pink-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {user.gender}
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                  Blood: {user.bloodGroup}
                </span>
              </div>

              <div className="mt-4">
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <div>
                    <strong>Username:</strong> {user.username}
                  </div>
                  <div>
                    <strong>Phone:</strong> {user.phone}
                  </div>
                  <div>
                    <strong>Age:</strong> {user.age}
                  </div>
                  <div>
                    <strong>Birth:</strong> {user.birthDate}
                  </div>
                  <div>
                    <strong>Eye:</strong> {user.eyeColor}
                  </div>
                  <div>
                    <strong>Hair:</strong> {user.hair.color} ({user.hair.type})
                  </div>
                  <div>
                    <strong>Height:</strong> {user.height} cm
                  </div>
                  <div>
                    <strong>Weight:</strong> {user.weight} kg
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
