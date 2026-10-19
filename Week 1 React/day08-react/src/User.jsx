export default function User({ user }) {
  return (
    <div>
      <img src={user.picture.large} />
      <p>{user.name.first + user.name.last}</p>
      <p>{user.email}</p>
    </div>
  );
}
