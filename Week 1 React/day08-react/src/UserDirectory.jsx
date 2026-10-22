import { useState, useEffect } from "react";
import users from "./data/users";
import UserCard from "./components/UserCard";
export default function UserDirectory() {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("all");
  const [usersData, setUsersData] = useState(users);
  let roles = ["all"];
  users.map((user) => {
    if (!roles.includes(user.role)) roles = [...roles, user.role];
  });

  function renderRoles(roles) {
    return roles.map((role, index) => {
      return (
        <option value={role} key={index}>
          {role === "all" ? "All Roles" : role}
        </option>
      );
    });
  }
  function filterUsersByQuery(e) {
    setQuery(e.target.value);
    setUsersData(users.filter((user) => user.name.includes(e.target.value)));
  }
  function filterUsersByRole(e) {
    setRole(e.target.value);
    if (e.target.value === "all") setUsersData(users);
    else
      setUsersData(users.filter((user) => user.role.includes(e.target.value)));
  }
  return (
    <div>
      <h2>User Directory</h2>
      <>
        <input
          type="text"
          value={query}
          placeholder="Tìm Theo Tên"
          onChange={filterUsersByQuery}
        />
        <div>
          <select name="roles" id="roles" onChange={filterUsersByRole}>
            {renderRoles(roles)}
          </select>
        </div>
        <div>
          {usersData.map((user) => {
            return <UserCard user={user} key={user.id} />;
          })}
        </div>
      </>
    </div>
  );
}
