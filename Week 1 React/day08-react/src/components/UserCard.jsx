export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
    </div>
  );
}
