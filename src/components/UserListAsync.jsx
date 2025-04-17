import React, { useState, useEffect } from "react";

const UserListAsync = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  });

  if (loading) {
    return <div>Loading...</div>;
  }

    return (
        <div className="user__list">
        <h2>User List</h2>
        <ul>
            {users.map((user) => (
            <li key={user.id} className="user__item">
                <span>{user.id}.</span>
                <span>{user.name} - </span>
                <span>{user.email} - </span>
                <span>{user.address.city}</span>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default UserListAsync;