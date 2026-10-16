import Greeting from "./Greeting";
import Counter from "./Counter";
import "./App.css";
export default function App() {
  const users = [
    {
      id: 1,
      name: "An Nguyễn",
      role: "Frontend Developer",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      name: "Bình Trần",
      role: "UI Designer",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 3,
      name: "Chi Lê",
      role: "Backend Developer",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
  ];
  function renderUser(users) {
    return users.map((user) => {
      return (
        <Greeting
          name={user.name}
          role={user.role}
          avatar={user.avatar}
          key={user.id}
        />
      );
    });
  }
  return (
    <div>
      {/* {renderUser(users)} */}
      <Counter />
    </div>
  );
}
